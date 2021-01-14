import * as Phaser from 'phaser';
import EasyStar from 'easystarjs';
import gameConstants from './gameConstants';
import map from './levels/map.json';
import Char from './Char/Char';

export default class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainScene' });
    this.finder = new EasyStar.js();
  }

  preload() {
    this.load.tilemapTiledJSON('map', map);
    this.load.image('tiles', 'assets/sprites/tiles.png');
    this.load.image('char', 'assets/sprites/char.png');
  }

  create() {
    this.map = this.make.tilemap({
      key: 'map',
      tileWidth: gameConstants.sizeInPixels,
      tileHeight: gameConstants.sizeInPixels,
    });

    const tileset = this.map.addTilesetImage('tiles');
    const layer = this.map
      .createLayer(0, tileset, 0, 0)
      .setInteractive({
        // cursor: `url(blur.cur), pointer`,
        cursor: 'pointer',
      });

    layer.setCollisionByProperty({ isCollied: true });
    this.physics.add.collider(layer, this.player);

    const offset = gameConstants.tileSize + gameConstants.tileSize / 2;
    this.player = new Char(this, offset, offset, 'char');

    this.input.on('pointerdown', (pointer) => {
      if (pointer.primaryDown) {
        this._createPath(pointer);
      }
    });
  }

  _createPath(pointer) {
    const fromX = Math.floor(this.player.x / gameConstants.tileSize);
    const fromY = Math.floor(this.player.y / gameConstants.tileSize);
    const toX = this.map.worldToTileX(pointer.worldX);
    const toY = this.map.worldToTileX(pointer.worldY);

    if (!(fromX === toX && fromY === toY)) {
      this._defineAllAndAcceptableTiles();
      this._calculatePath(fromX, fromY, toX, toY);
    }
  }

  _defineAllAndAcceptableTiles() {
    const allTiles = [];
    const acceptableTiles = [];

    for (let y = 0; y < this.map.height; y++) {
      const col = [];
      for (let x = 0; x < this.map.width; x++) {
        const id = this.getTileID(x, y);
        if (id === 1 || id === 22) {
          acceptableTiles.push(id);
        }
        col.push(id);
      }
      allTiles.push(col);
    }

    this.finder.setGrid(allTiles);
    this.finder.setAcceptableTiles(acceptableTiles);
  }

  getTileID(x, y) {
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
        targets: this.player,
        x: {
          value: cellX * this.map.tileWidth + gameConstants.tileSize / 2,
          duration: gameConstants.duration,
        },
        y: {
          value: cellY * this.map.tileHeight + gameConstants.tileSize / 2,
          duration: gameConstants.duration,
        },
      });
    }

    this.tweens.timeline({
      tweens: tweens,
    });
  };
}
