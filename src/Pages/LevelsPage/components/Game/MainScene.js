import * as Phaser from 'phaser';
import EasyStar from 'easystarjs';
import gameConstants from './gameConstants';
import map from './levels/map4.json';
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
      .createLayer(0, tileset)
      .setInteractive({
        // cursor: `url(blur.cur), pointer`,
        cursor: 'pointer',
      });

    // layer.setCollisionByProperty({ isCollied: true });
    // this.physics.add.collider(layer, this.char);

    const offset = gameConstants.tileSize + gameConstants.tileSize / 2;
    this.char = new Char(this, offset, offset, 'char');

    this.input.on('pointerdown', (pointer) => {
      if (pointer.primaryDown) {
        this._createPath(pointer);
      }
    });

    this.objectsLayer = this.map.getObjectLayer('objects')['objects'];
    this.objects = this.physics.add.staticGroup();
    this.objectsLayer.forEach(object => {
      let obj = this.objects.create(object.x, object.y, object.gid);
      obj.setScale(object.width / 40, object.height / 40);
      obj.setOrigin(0);
      obj.body.width = object.width;
      obj.body.height = object.height;
    });

    this.physics.add.overlap(this.char, this.objects, this.playInteraction, null, this);
  }

  playInteraction(player, obj) {
    obj.destroy(obj.x, obj.y); // remove the tile/coin
    console.log(obj)
    console.log('destroyed')
    // coinScore++; // increment the score
    // text.setText(`Coins: ${coinScore}x`); // set the text to show the current score
    // return false;
  }

  _createPath(pointer) {
    const fromX = Math.floor(this.char.x / gameConstants.tileSize);
    const fromY = Math.floor(this.char.y / gameConstants.tileSize);
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
    const properties = this.map.tilesets[0].tileProperties;

    for (let y = 0; y < this.map.height; y++) {
      const col = [];
      for (let x = 0; x < this.map.width; x++) {
        const id = this.getTileID(x, y);
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
        targets: this.char,
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
