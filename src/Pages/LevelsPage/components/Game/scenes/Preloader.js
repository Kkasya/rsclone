import * as Phaser from 'phaser';
import SPRITES_CHAR from '../constants/SPRITES_CHAR';
import SPRITES_ITEMS from '../constants/SPRITES_ITEMS';

export default class Preloader extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  preload() {
    this.add.text(20, 20, 'Loading...');
    this.load.tilemapTiledJSON('map', require(`../levels/${this.game.levelNumber}.json`));
    // this.load.tilemapTiledJSON('map', require(`../levels/example.json`));

    SPRITES_CHAR.forEach((item) => {
      this.load.image(item, `assets/sprites/char/${item}.png`);
    });

    SPRITES_ITEMS.forEach((item) => {
      this.load.image(item.type, `assets/sprites/items/${item.type}.png`);
    });
  }

  create() {
    this.scene.start('MainScene');
  }
}
