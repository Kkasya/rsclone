import * as Phaser from 'phaser';
import ITEMS from '../constants/ITEMS';

export default class Preloader extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  preload() {
    this.add.text(20, 20, 'Loading...');
    this.load.tilemapTiledJSON('map', require(`../levels/${this.game.levelNumber}.json`));
    // this.load.tilemapTiledJSON('map', require(`../levels/example.json`));

    ITEMS.forEach((item) => {
      this.load.image(item.type, `assets/sprites/${item.type}.png`);
    });
  }

  create() {
    this.scene.start('MainScene');
  }
}
