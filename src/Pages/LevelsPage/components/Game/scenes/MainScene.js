import * as Phaser from 'phaser';
import Pathfinder from '../utils/Pathfinder';
import SIZES from '../constants/SIZES';
import GameObject from '../GameObject';
import Char from '../Char';
import ActionsReducer from '../utils/ActionsReducer';
import Stock from '../Stock';
import ActiveItem from '../ActiveItem';
import Bullets from '../Bullets';

export default class MainScene extends Phaser.Scene {
  constructor() {
    super('MainScene');
    this.pathfinder = new Pathfinder(this);
    this.gameObjects = [];
    this.onlyUpMirrors = [];
    this.actionsReducer = new ActionsReducer();
    this.stock = new Stock(this);
    this.isCollideAccept = true;
    this.activeItem = new ActiveItem(this);
  }

  create() {
    this.map = this.make.tilemap({
      key: 'map',
      tileWidth: SIZES.tileSize,
      tileHeight: SIZES.tileSize,
    });

    const tileset = this.map.addTilesetImage('tiles');
    this.map.createLayer(0, tileset, 0, 0).setInteractive({ cursor: 'pointer' });
    this.stockEdge = Math.floor(this.map.layers[1].data.length * 0.8);

    this._addListener();
    this._createGameObjects(true);
    this._createControlPanel();
    this._createCharacter();
    this._createGameObjects(false);
    this.stock.defineLimit();
    this.activeItem.init();

    this._interactionWithChar = this._interactionWithChar.bind(this)

    this.gameObjects.forEach((item) => {
      this._setCollisionWithChar(
        this,
        item.gameObject,
        this.char,
        this._interactionWithChar,
        item
      );
    });

    this.game.canvas.oncontextmenu = (e) => (e.preventDefault());
  }

  _addListener() {
    this.input.on('pointerdown', (pointer) => {
      if (!pointer.primaryDown) {
        this.activeItem.reset();
      }
      else if (!this.activeItem.type && !this.char.isFreeze && !this.char.isFlying) {
        this.pathfinder.createPath(pointer);
      }
    });
  }

  _createGameObjects(isWithoutMirrors) {
    for (let i = 0; i < this.stockEdge; i += 4) {
      for (let j = 0; j < this.map.layers[1].data[i].length; j += 4) {
        const item = this.map.layers[1].data[i][j];
        const type = item.properties.type;

        if (item.index !== -1) {
          if (isWithoutMirrors ^ type.includes('mirror-up')) {
            const gameObject = new GameObject(
              this,
              item.x * SIZES.tileSizeInPixels + SIZES.halfForOffset,
              item.y * SIZES.tileSizeInPixels + SIZES.halfForOffset,
              type,
            );

            if (isWithoutMirrors && type.includes('laser')) {
              const direction = type.split('-')[1];
              const bulletsObj = new Bullets(
                this,
                item.x * SIZES.tileSizeInPixels,
                item.y * SIZES.tileSizeInPixels,
                direction,
              );
              this.gameObjects.push({ ...item.properties, gameObject, bulletsObj, x: item.x, y: item.y });
            }
            else {
              this.gameObjects.push({ ...item.properties, gameObject, x: item.x, y: item.y });
            }
          }
        }
      }
    }
  }

  _createControlPanel() {
    for (let i = this.stockEdge; i < this.map.layers[1].data.length; i += 1) {
      for (let j = 0; j < this.map.layers[1].data[i].length; j += 1) {
        const item = this.map.layers[1].data[i][j];

        if (item.index !== -1) {
          if (this.map.layers[1].data[i - 1][j].index !== -1) continue;
          const gameObject = new GameObject(
            this,
            item.x * SIZES.tileSizeInPixels + SIZES.halfForOffset,
            item.y * SIZES.tileSizeInPixels + SIZES.halfForOffset,
            item.properties.type
          );

          if (item.properties.type === 'move') {
            this.moveButton = { ...item.properties, gameObject, x: item.x, y: item.y };
          }
          else {
            this.stock.addEmptySlot({ ...item.properties, gameObject, x: item.x, y: item.y });
          }
          j += 3;
        }
      }
    }
  }

  _createCharacter() {
    const offset = 2 * SIZES.tileSize + SIZES.halfForOffset;
    this.char = new Char(this, offset, offset, 'char');
  }

  _setCollisionWithChar(scene, collider, player, callback, colliderItem) {
    scene.physics.add.collider(collider, player, () => callback(colliderItem));
  }

  _interactionWithChar(colliderItem) {
    const action = this.actionsReducer.defineAction(colliderItem.type);
    if (!this.isCollideAccept || !action) {
      return;
    }
    this.isCollideAccept = false;

    switch (action) {
      case 'pickItem':
        if (this.stock.isEnoughPlace) {
          this.stock.addItem(colliderItem.type);
          colliderItem.gameObject.destroy();
        }
        break;

      case 'freeze':
        this.char.addFreeze();
        break;

      case 'heatByFire':
        this.char.addHeatByFire();
        break;

      case 'death':
        this.scene.start('Death');
        break;

      case 'winRound':
        this.scene.start('WinRound');
        break;

      default: console.log(`Unknown action: ${action}`);
    }
  }

  moveCharacter(path) {
    const tweens = [];
    for (let i = 0; i < path.length - 1; i++) {
      const cellX = path[i + 1].x * SIZES.blocksInTile;
      const cellY = path[i + 1].y * SIZES.blocksInTile;

      tweens.push({
        targets: this.char,
        x: {
          value: cellX * this.map.tileWidth + SIZES.halfForOffset,
          duration: SIZES.duration,
        },
        y: {
          value: cellY * this.map.tileHeight + SIZES.halfForOffset,
          duration: SIZES.duration,
        },
      });

      const type = this.map.layers[1].data[cellY][cellX].properties.type;
      if (type === 'water') {
        break;
      }
      else if (type === 'fire' && !this.isCollideAccept) {
        break;
      }
    }

    this.tweens.timeline({
      tweens: tweens,
    });
  };

  update() {
    if (this.char.body.x % 40 > 10 || this.char.body.y % 40 > 10) {
      this.isCollideAccept = true;
    }
    if (this.activeItem.type) {
      const x = this.input.mouse.manager.activePointer.worldX + SIZES.cursorImageOffset;
      const y = this.input.mouse.manager.activePointer.worldY + SIZES.cursorImageOffset;
      this.activeItem.image.setPosition(x, y);
    }

    this.gameObjects.forEach((item) => {
      if (item.type.includes('laser')) {
        if (item.bulletsObj.bullets) {
          const bullet = item.bulletsObj.bullets.get();
          if (bullet) {
            bullet.fire(item.bulletsObj.initX, item.bulletsObj.initY);
          }
        }
      }
    });
  }
}
