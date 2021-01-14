import * as Phaser from 'phaser';
import gameConstants from './gameConstants';
import map from './levels/map.json';
import Char from './Char/Char';

export default class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainScene' });
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

    layer.setCollisionByProperty({ collied: true });
    this.physics.add.collider(layer, this.player);

    this.player = new Char(this, 60, 60, 'char');
    console.log(this);
  }
}
