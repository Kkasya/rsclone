import * as Phaser from 'phaser';
import Pathfinder from '../utils/Pathfinder';
import SIZES from '../constants/SIZES';
import GameObject from '../GameObject';
import Char from '../Char';
import ActionsReducer from '../utils/ActionsReducer';
import Stock from '../Stock';
import ActiveItem from '../ActiveItem';

export default class MainScene extends Phaser.Scene {
  constructor() {
    super('MainScene');
    this.pathfinder = new Pathfinder(this);
    this.actionsReducer = new ActionsReducer();
    this.collideObjects = [];
    this.stock = new Stock(this);
    this.activeItem = new ActiveItem(this);
    this.isCollideAccept = true;
    this.isReadyToToggleCollide = false;
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

    this.interactionWithChar = this.interactionWithChar.bind(this);

    this._addListenerToField();
    this._createCharacter();
    this._createGameObjects();
    this._createControlPanel();
    this._addListenerToMoveButton();
    this.stock.defineLimit();
    this.activeItem.init();

    this.game.canvas.oncontextmenu = (e) => (e.preventDefault());
    this.createRays();
  }

  createRays() {
    this.collideObjects.forEach((item) => {
      if (item.texture.includes('laser')) {
        item.createRays();
      }
    });
  }

  _addListenerToField() {
    this.input.on('pointerdown', (pointer) => {
      if (!pointer.primaryDown) {
        this.activeItem.reset();
      }
      else if (!this.activeItem.type && !this.char.isFreeze && !this.char.isFlying) {
        this.pathfinder.createPath(pointer);
      }
    });
  }

  _createGameObjects() {
    for (let i = 0; i < this.stockEdge; i += 4) {
      for (let j = 0; j < this.map.layers[1].data[i].length; j += 4) {
        const item = this.map.layers[1].data[i][j];

        if (item.index !== -1) {
          const gameObject = new GameObject(this, item.x, item.y, item.properties.type);
          if (item.properties.isCollied) {
            this.collideObjects.push(gameObject);
          }
          else {
            gameObject.setCollisionWithChar();
          }
        }
      }
    }
  }

  _createControlPanel() {
    const data = this.map.layers[1].data;
    for (let i = this.stockEdge; i < data.length; i += 1) {
      for (let j = 0; j < data[i].length; j += 1) {
        const item = data[i][j];

        if (item.index !== -1 && data[i - 1][j].index === -1) {
          const gameObject = new GameObject(this, item.x, item.y, item.properties.type);
          if (item.properties.type === 'move') {
            this.moveButton = gameObject;
          }
          else {
            this.stock.addEmptySlot(gameObject);
          }
          j += 3;
        }
      }
    }
  }

  _addListenerToMoveButton() {
    this.moveButton.on('pointerdown', (pointer) => {
      if (pointer.primaryDown) {
        this.activeItem.reset();
      }
    });
  }

  _createCharacter() {
    const offsetX = 4 * SIZES.blocksInTile;
    const offsetY = 2 * SIZES.blocksInTile;
    this.char = new Char(this, offsetX, offsetY, 'char');
  }

  interactionWithChar(colliderItem) {
    const action = this.actionsReducer.defineAction(colliderItem.texture);
    if (!this.isCollideAccept || !action) {
      return;
    }

    switch (action) {
      case 'pickItem':
        if (this.stock.isEnoughPlace) {
          this.stock.addItem(colliderItem.texture);
          colliderItem.destroy();
        }
        break;

      case 'freeze':
        this.char.addFreeze();
        this.toggleCollideAccept();
        break;

      case 'heatByFire':
        this.char.addHeatByFire();
        this.toggleCollideAccept();
        break;

      case 'heatByLaser':
        this.char.addHeatByLaser();
        this.toggleCollideAccept();
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

      const fieldType = this.map.layers[1].data[cellY][cellX].properties.type;
      if (this.checkMobility(fieldType)) {
        break;
      }
    }

    this.tweens.timeline({
      tweens: tweens,
    });
  };

  toggleCollideAccept() {
    this.isCollideAccept = !this.isCollideAccept;
  }

  checkMobility(fieldType) {
    if (this.isCollideAccept) {
      if (fieldType === 'water' || (fieldType === 'fire' && !this.char.isWet)) {
        return true;
      }
    }
    return false;
  }

  update() {
    if (!this.isCollideAccept && this.isReadyToToggleCollide && this._isNearTileBoundies()) {
      this.isCollideAccept = true;
      this.isReadyToToggleCollide = false;
    }

    if (this.activeItem.type) {
      const x = this.input.mouse.manager.activePointer.worldX + SIZES.cursorImageOffset;
      const y = this.input.mouse.manager.activePointer.worldY + SIZES.cursorImageOffset;
      this.activeItem.image.setPosition(x, y);
    }
  }

  _isNearTileBoundies() {
    const remainderX = (this.char.body.x - 12 + SIZES.halfForOffset) % 40;
    const remainderY = (this.char.body.y - 8 + SIZES.halfForOffset) % 40;
    return (remainderX < 2 || remainderX > 38 || remainderY < 2 || remainderY > 38);
  }
}
