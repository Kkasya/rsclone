import * as Phaser from 'phaser';
import SPRITES_CHAR from '../constants/SPRITES_CHAR';
import SPRITES_ITEMS from '../constants/SPRITES_ITEMS';
import SPRITES_ANIMATION from '../constants/SPRITES_ANIMATION';

export default class Preloader extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  preload() {
    this.add.text(20, 20, 'Loading...');
    this.load.tilemapTiledJSON('map', require(`../levels/${this.game.levelNumber}.json`));

    this._loadSpritesChar();
    this._loadSpritesItems();
    this._loadSpritesAnimation();
  }

  _loadSpritesChar() {
    SPRITES_CHAR.forEach((item) => {
      this.load.image(item, `/assets/sprites/char/${item}.png`);
    });
  }

  _loadSpritesItems() {
    SPRITES_ITEMS.forEach((item) => {
      this.load.image(item.type, `/assets/sprites/items/${item.type}.png`);
    });
  }

  _loadSpritesAnimation() {
    SPRITES_ANIMATION.forEach((item) => {
      this.load.image(item, `/assets/sprites/animation/${item}.png`);
    });
  }

  create() {
    this.scene.start('Hint');
  }
}
