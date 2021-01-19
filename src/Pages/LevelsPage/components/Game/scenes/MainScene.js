import * as Phaser from 'phaser';
import EasyStar from 'easystarjs';
import SIZES from '../constants/SIZES';
import GameObject from '../GameObject';
import Char from '../Char';
import ActionsReducer from '../utils/ActionsReducer';
import Stock from '../Stock';

export default class MainScene extends Phaser.Scene {
  constructor() {
    super('MainScene');
    this.finder = new EasyStar.js();
    this.gameObjects = [];
    this.onlyUpMirrors = [];
    this.actionsReducer = new ActionsReducer();
    this.stock = new Stock(this);
    this.isCollideAccept = true;
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

    this.input.on('pointerdown', (pointer) => {
      if (!pointer.primaryDown) {
        this.resetActiveItem();
      }
      else if (!this.activeItem.type && !this.char.isFreeze && !this.char.isFlying) {
        this._createPath(pointer);
      }
    });

    this._createGameObjects(true);
    this._createCharacter();
    this._createGameObjects(false);
    this.stock.defineLimit();
    this.initActiveItem();

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

  _createGameObjects(isWithoutMirrors) {
    for (let i = 0; i < this.stockEdge; i += 4) {
      for (let j = 0; j < this.map.layers[1].data[i].length; j += 4) {
        const item = this.map.layers[1].data[i][j];

        if (item.index !== -1) {
          if (isWithoutMirrors ^ (item.properties.type === 'mirror-up-left' || item.properties.type === 'mirror-up-right')) {
            const gameObject = new GameObject(
              this,
              item.x * SIZES.tileSizeInPixels + SIZES.halfForOffset,
              item.y * SIZES.tileSizeInPixels + SIZES.halfForOffset,
              item.properties.type
            );

            this.gameObjects.push({ ...item.properties, gameObject, x: item.x, y: item.y });
          }
        }
      }
    }

    for (let i = this.stockEdge; i < this.map.layers[1].data.length; i += 1) {
      for (let j = 0; j < this.map.layers[1].data[i].length; j += 1) {
        const item = this.map.layers[1].data[i][j];

        if (item.index !== -1 && isWithoutMirrors) {
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

  _createPath(pointer) {
    const toX = Math.floor(pointer.x / SIZES.tileSize);
    const toY = Math.floor(pointer.y / SIZES.tileSize);
    const fromX = Math.floor(this.char.x / SIZES.tileSize);
    const fromY = Math.floor(this.char.y / SIZES.tileSize);

    if (!(fromX === toX && fromY === toY)) {
      this._defineAllAndAcceptableTiles();
      this._calculatePath(fromX, fromY, toX, toY);
    }
  }

  _defineAllAndAcceptableTiles() {
    const allTiles = [];
    const acceptableTiles = [];
    const properties = this.map.tilesets[0].tileProperties;

    for (let y = 0; y < this.map.height; y += SIZES.blocksInTile) {
      const col = [];
      for (let x = 0; x < this.map.width; x += SIZES.blocksInTile) {
        const id = this._getTileID(x, y);
        if (!properties[id - 1] || !properties[id - 1].isCollied) {
          acceptableTiles.push(id);
        }
        col.push(id);
      }
      allTiles.push(col);
    }

    this.finder.setGrid(allTiles);
    this.finder.setAcceptableTiles(acceptableTiles);
  }

  _getTileID(x, y) {
    return this._getIdFromObjectsLayer(x, y) || this._getIdFromFloorLayer(x, y);
  }

  _getIdFromObjectsLayer(x, y) {
    for (let i = 0; i < this.gameObjects.length; i++) {
      if (this.gameObjects[i].x === x && this.gameObjects[i].y === y && this.gameObjects[i].isCollied) {
        return SIZES.unacceptableId;
      }
    }
  }

  _getIdFromFloorLayer(x, y) {
    const tile = this.map.getTileAt(x, y);
    return tile.index;
  }

  _calculatePath(fromX, fromY, toX, toY) {
    this.finder.findPath(fromX, fromY, toX, toY, (path) => {
      if (path) {
        this._moveCharacter(path);
      }
    });
    this.finder.calculate();
  }

  _moveCharacter(path) {
    const tweens = [];
    for (let i = 0; i < path.length - 1; i++) {
      const cellX = path[i + 1].x;
      const cellY = path[i + 1].y;

      tweens.push({
        targets: this.char,
        x: {
          value: cellX * this.map.tileWidth * SIZES.blocksInTile + SIZES.halfForOffset,
          duration: SIZES.duration,
        },
        y: {
          value: cellY * this.map.tileHeight * SIZES.blocksInTile + SIZES.halfForOffset,
          duration: SIZES.duration,
        },
      });
    }

    this.tweens.timeline({
      tweens: tweens,
    });
  };

  initActiveItem() {
    this.activeItem = {
      type: '',
      index: 0,
      image: new GameObject(this, -SIZES.cursorImageOffset, -SIZES.cursorImageOffset, ''),
    };
  }

  resetActiveItem() {
    [this.activeItem.type, this.activeItem.index] = ['', 0];
    this.activeItem.image.setPosition(-SIZES.cursorImageOffset, -SIZES.cursorImageOffset);
  }

  setActiveItem(type, index) {
    [this.activeItem.type, this.activeItem.index] = [type, index];
    this.activeItem.image.setTexture(type);
  }

  update() {
    if (this.char.body.x % 40 > 10 || this.char.body.y % 40 > 10) {
      this.isCollideAccept = true;
    }
    if (this.activeItem.type) {
      const x = this.input.mouse.manager.activePointer.worldX + SIZES.cursorImageOffset;
      const y = this.input.mouse.manager.activePointer.worldY + SIZES.cursorImageOffset;
      this.activeItem.image.setPosition(x, y);
    }
  }
}
