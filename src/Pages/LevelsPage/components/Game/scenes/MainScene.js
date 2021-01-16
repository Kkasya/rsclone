import * as Phaser from 'phaser';
import EasyStar from 'easystarjs';
import TILES_SIZES from '../constants/TILES_SIZES';
import GameObject from '../GameObject';
import ActionsReducer from '../utils/ActionsReducer';
import Stock from '../Stock';

export default class MainScene extends Phaser.Scene {
  constructor() {
    super('MainScene');
    this.finder = new EasyStar.js();
    this.gameObjects = [];
    this.actionsReducer = new ActionsReducer();
    this.stock = new Stock();
  }

  create() {
    this.map = this.make.tilemap({
      key: 'map',
      tileWidth: 40,
      tileHeight: 40,
    });

    const tileset = this.map.addTilesetImage('tiles');
    const layer = this.map
      .createLayer(0, tileset)
      .setInteractive({ cursor: 'pointer' })

    // layer.setCollisionByProperty({ isCollied: true });
    // this.physics.add.collider(layer, this.char);

    this.input.on('pointerdown', (pointer) => {
      if (pointer.primaryDown) {
        this._createPath(pointer);
      }
    });

    for (let i = 0; i < this.map.layers[1].data.length; i += TILES_SIZES.blocksInTile) {
      for (let j = 0; j < this.map.layers[1].data[i].length; j += TILES_SIZES.blocksInTile) {
        const item = this.map.layers[1].data[i][j]
        if (item.index !== -1 && item.x % TILES_SIZES.blocksInTile === 0 && item.y % TILES_SIZES.blocksInTile === 0) {
          const gameObject = new GameObject(
            this,
            item.x * TILES_SIZES.fieldWidth + TILES_SIZES.tileSize / 2,
            item.y * TILES_SIZES.fieldWidth + TILES_SIZES.tileSize / 2,
            item.properties.type
          );
          this.gameObjects.push({ ...item.properties, gameObject, x: item.x, y: item.y });
        }
      }
    }

    this._createCharacter();
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

  _createCharacter() {
    const offset = TILES_SIZES.tileSize + TILES_SIZES.tileSize / 2;
    this.char = new GameObject(this, offset, offset, 'char');
  }

  _setCollisionWithChar(scene, collider, player, callback, colliderItem) {
    scene.physics.add.collider(collider, player, () => callback(colliderItem));
  }

  _interactionWithChar(colliderItem) {
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

        break;

      case 'heatUp':

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
    const fromX = Math.floor(this.char.x / TILES_SIZES.tileSize);
    const fromY = Math.floor(this.char.y / TILES_SIZES.tileSize);
    const toX = Math.floor(this.map.worldToTileX(pointer.worldX) / TILES_SIZES.blocksInTile);
    const toY = Math.floor(this.map.worldToTileX(pointer.worldY) / TILES_SIZES.blocksInTile);

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
          value: cellX * this.map.tileWidth * TILES_SIZES.blocksInTile + TILES_SIZES.tileSize / 2,
          duration: TILES_SIZES.duration,
        },
        y: {
          value: cellY * this.map.tileHeight * TILES_SIZES.blocksInTile + TILES_SIZES.tileSize / 2,
          duration: TILES_SIZES.duration,
        },
      });
    }

    this.tweens.timeline({
      tweens: tweens,
    });
  };
}
