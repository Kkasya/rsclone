import * as Phaser from 'phaser';
import EasyStar from 'easystarjs';
import TILES_SIZES from '../constants/TILES_SIZES';
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
    this.stock = new Stock();
  }

  create() {
    this.map = this.make.tilemap({
      key: 'map',
      tileWidth: TILES_SIZES.tileSize,
      tileHeight: TILES_SIZES.tileSize,
    });

    const tileset = this.map.addTilesetImage('tiles');
    this.map.createLayer(0, tileset, 0, 0).setInteractive({ cursor: 'pointer' });
    
    this.input.on('pointerdown', (pointer) => {
      if (pointer.primaryDown && !this.char.isFreeze && !this.char.isFlying) {
        this._createPath(pointer);
      }
    });

    this._createGameObjects(true);
    this._createCharacter();
    this._createGameObjects(false);
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
  }

  _createGameObjects(isWithoutMirrors) {
    for (let i = 0; i < this.map.layers[1].data.length; i += TILES_SIZES.blocksInTile) {
      for (let j = 0; j < this.map.layers[1].data[i].length; j += TILES_SIZES.blocksInTile) {
        const item = this.map.layers[1].data[i][j];

        if (item.index !== -1 && item.x % TILES_SIZES.blocksInTile === 0 && item.y % TILES_SIZES.blocksInTile === 0) {
          if (isWithoutMirrors ^ (item.properties.type === 'mirror-up-left' || item.properties.type === 'mirror-up-right')) {
            const gameObject = new GameObject(
              this,
              item.x * TILES_SIZES.tileSizeInPixels + TILES_SIZES.halfForOffset,
              item.y * TILES_SIZES.tileSizeInPixels + TILES_SIZES.halfForOffset,
              item.properties.type
            );

            this.gameObjects.push({ ...item.properties, gameObject, x: item.x, y: item.y });
          }
        }
      }
    }
  }

  _createCharacter() {
    const offset = 2 * TILES_SIZES.tileSize + TILES_SIZES.halfForOffset;
    this.char = new Char(this, offset, offset, 'char');
  }

  _setCollisionWithChar(scene, collider, player, callback, colliderItem) {
    scene.physics.add.collider(collider, player, () => callback(colliderItem));
  }

  _interactionWithChar(colliderItem) {
    console.log(colliderItem)
    const action = this.actionsReducer.defineAction(colliderItem.type);
    if (!action) {
      return;
    }
    switch (action) {
      case 'pickItem':
        colliderItem.gameObject.destroy();
        this.stock.add(colliderItem);
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

    console.log(action);
  }

  _createPath(pointer) {
    const toX = Math.floor(pointer.x / TILES_SIZES.tileSize);
    const toY = Math.floor(pointer.y / TILES_SIZES.tileSize);
    const fromX = Math.floor(this.char.x / TILES_SIZES.tileSize);
    const fromY = Math.floor(this.char.y / TILES_SIZES.tileSize);

    if (!(fromX === toX && fromY === toY)) {
      this._defineAllAndAcceptableTiles();
      this._calculatePath(fromX, fromY, toX, toY);
    }
  }

  _defineAllAndAcceptableTiles() {
    const allTiles = [];
    const acceptableTiles = [];
    const properties = this.map.tilesets[0].tileProperties;

    for (let y = 0; y < this.map.height; y += TILES_SIZES.blocksInTile) {
      const col = [];
      for (let x = 0; x < this.map.width; x += TILES_SIZES.blocksInTile) {
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
        return TILES_SIZES.unacceptableId;
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
          value: cellX * this.map.tileWidth * TILES_SIZES.blocksInTile + TILES_SIZES.halfForOffset,
          duration: TILES_SIZES.duration,
        },
        y: {
          value: cellY * this.map.tileHeight * TILES_SIZES.blocksInTile + TILES_SIZES.halfForOffset,
          duration: TILES_SIZES.duration,
        },
      });
    }

    this.tweens.timeline({
      tweens: tweens,
    });
  };
}
