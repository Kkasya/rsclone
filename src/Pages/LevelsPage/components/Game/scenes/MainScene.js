import * as Phaser from 'phaser';
import Pathfinder from '../utils/Pathfinder';
import ActionsReducer from '../utils/ActionsReducer';
import SIZES from '../constants/SIZES';
import GameObjectFabric from '../gameElements/GameObjectFabric';
import Char from '../gameElements/Char';
import Stock from '../gameElements/Stock';
import ActiveItem from '../gameElements/ActiveItem';
import INIT_CHAR_LOCATION from '../levels/INIT_CHAR_LOCATION';

export default class MainScene extends Phaser.Scene {
  constructor() {
    super('MainScene');
    this.pathfinder = new Pathfinder(this);
    this.actionsReducer = new ActionsReducer();
  }

  create() {
    this.createMap();
    this.init();
    this.stockEdge = Math.floor(this.map.layers[2].data.length * 0.8);
    this.interactionWithChar = this.interactionWithChar.bind(this);

    this._addListenerToField();
    this._createCharacter();
    this._createGameObjects();
    this._createControlPanel();
    this._addListenerToMoveButton();
    this._addListenerToRestartButton();
    this.stock.defineLimit();
    this.activeItem.init();

    this.game.canvas.oncontextmenu = (e) => (e.preventDefault());
    this.createRays();
  }

  createMap() {
    this.map = this.make.tilemap({
      key: 'map',
      tileWidth: SIZES.tileSize,
      tileHeight: SIZES.tileSize,
    });

    const tileset = this.map.addTilesetImage('tiles');
    this.map
      .createLayer(0, tileset, 0, 0)
      .setInteractive({ cursor: 'pointer' });
  }

  init() {
    this.stock = new Stock(this);
    this.activeItem = new ActiveItem(this);
    this.collideObjects = [];
    this.pickableObjects = [];
    this.restartButton = null;
    this.isCollideAccept = true;
    this.isReadyToToggleCollide = false;
  }

  createRays() {
    this.collideObjects.forEach((item) => {
      if (item.texture.key.includes('laser')) {
        item.createRays();
      }
    });
  }

  _addListenerToField() {
    this.input.on('pointerdown', (pointer) => {
      if (pointer.primaryDown) {
        if (this.activeItem.type && this.activeItem.isSetupOnField) {
          const x = Math.floor(pointer.worldX / SIZES.tileSize) * SIZES.tileSize + SIZES.halfForOffset;
          const y = Math.floor(pointer.worldY / SIZES.tileSize) * SIZES.tileSize + SIZES.halfForOffset;

          if (this.isCollideWithPickableObjects(x, y)) {
            return;
          }

          const newX = (x - 20) / 10;
          const newY = (y - 20) / 10;
          const properties = this.map.tilesets[0].tileProperties;
          const id = this.pathfinder._getTileID(newX, newY);
          if (properties[id - 1]?.isCollied) {
            return;
          }

          this.addObjectToField((x - 20) / 10, (y - 20) / 10, this.activeItem.type.key);
        }
        else if (!this.activeItem.type && !this.char.isFreeze && !this.char.isFlying) {
          this.pathfinder.createPath(pointer);
        }
      }
      else {
        this.activeItem.reset();
      }
    });
  }

  isCollideWithPickableObjects(x, y) {
    for (let i = 0; i < this.pickableObjects.length; i++) {
      if (this.pickableObjects[i].x === x && this.pickableObjects[i].y === y) {
        return true;
      }
    }
  }

  addObjectToField(x, y, oldType) {
    const newType = oldType.replace('stock-', '');
    const gameObject = new GameObjectFabric(this, x, y, newType);

    this.collideObjects.push(gameObject);
    this.stock.removeActiveItem();
    this.activeItem.reset();
    this.refreshLasers();
  }

  refreshLasers() {
    this.collideObjects.forEach((item) => {
      if (item.texture.key.includes('laser')) {
        item.raysGenerator.refresh();
      }
    });
  }

  _createGameObjects() {
    for (let z = 1; z < this.map.layers.length; z += 1) {
      for (let i = 0; i < this.stockEdge; i += 4) {
        for (let j = 0; j < this.map.layers[z].data[i].length; j += 4) {
          const item = this.map.layers[z].data[i][j];

          if (item.index !== -1) {
            const gameObject = new GameObjectFabric(
              this,
              item.x,
              item.y,
              item.properties.type,
              item.properties.isSetupOnField,
            );
            if (item.properties.isCollied) {
              this.collideObjects.push(gameObject);
            }
            else if (!gameObject.texture.key.includes('rock')) {
              this.pickableObjects.push(gameObject);
              gameObject.setCollisionWithChar();
            }
          }
        }
      }
    }
  }

  _createControlPanel() {
    const data = this.map.layers[2].data;
    for (let i = this.stockEdge; i < data.length; i += 1) {
      for (let j = 0; j < data[i].length; j += 1) {
        const item = data[i][j];

        if (item.index !== -1 && data[i - 1][j].index === -1) {
          if (item.properties.type === 'restartButton' && this.restartButton) {
            continue;
          }

          const gameObject = new GameObjectFabric(this, item.x, item.y, item.properties.type);

          if (item.properties.type === 'move') {
            this.moveButton = gameObject;
          }
          else if (item.properties.type === 'restartButton') {
            gameObject.x += 28;
            gameObject.y -= 10;
            this.restartButton = gameObject;
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

  _addListenerToRestartButton() {
    this.restartButton.on('pointerdown', (pointer) => {
      if (pointer.primaryDown) {
        this.scene.start('MainScene');
      }
    });
  }

  _createCharacter() {
    const offsetX = INIT_CHAR_LOCATION[this.game.levelNumber - 1].x * SIZES.blocksInTile;
    const offsetY = INIT_CHAR_LOCATION[this.game.levelNumber - 1].y * SIZES.blocksInTile;
    this.char = new Char(this, offsetX, offsetY, 'char');
  }

  interactionWithChar(colliderItem) {
    const action = this.actionsReducer.defineAction(colliderItem.texture.key);
    if (!this.isCollideAccept || !action) {
      return;
    }

    switch (action) {
      case 'pickItem':
        if (this.stock.isEnoughPlace) {
          this.stock.addItem(colliderItem.texture.key, colliderItem.isSetupOnField);
          this.removeItem(this.pickableObjects, colliderItem);
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

      const fieldType = this.map.layers[2].data[cellY][cellX].properties.type;
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

  _isNearTileBoundaries() {
    const remainderX = (this.char.body.x - 12 + SIZES.halfForOffset) % SIZES.tileSize;
    const remainderY = (this.char.body.y - 8 + SIZES.halfForOffset) % SIZES.tileSize;
    return (remainderX < 2 || remainderX > 38 || remainderY < 2 || remainderY > 38);
  }

  removeItem(arr, item) {
    const index = arr.indexOf(item);
    arr.splice(index, 1);
  }

  update() {
    if (!this.isCollideAccept && this.isReadyToToggleCollide && this._isNearTileBoundaries()) {
      this.isCollideAccept = true;
      this.isReadyToToggleCollide = false;
    }

    if (this.activeItem.type) {
      const x = this.input.mouse.manager.activePointer.worldX;
      const y = this.input.mouse.manager.activePointer.worldY;

      if (this.activeItem.isSetupOnField) {
        this.activeItem.image.setPosition(x, y);
      }
      else {
        this.activeItem.image.setPosition(x + SIZES.cursorImageOffset, y + SIZES.cursorImageOffset);
      }
    }
  }
}
