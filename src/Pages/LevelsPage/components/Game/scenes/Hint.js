import * as Phaser from 'phaser';
import LEVELS from '../levels/LEVELS';
import SIZES from '../constants/SIZES';

export default class Hint extends Phaser.Scene {
  constructor() {
    super('Hint');
    this.padding = 30;
  }

  create() {
    this._addLevelTitle();
    this._addLevelHint();
    this._addListener();
  }

  _addLevelTitle() {
    this.make.text({
      x: SIZES.widthInPixels / 2,
      y: this.padding * 2,
      origin: {
        x: 0.5,
      },
      text: `Level ${this.game.levelNumber}. ${LEVELS[this.game.levelNumber].title.en}`,
      style: {
        font: '18px Arial',
        fill: 'white',
      }
    });
  }

  _addLevelHint() {
    this.make.text({
      x: this.padding,
      y: this.padding * 3,
      text: `Tip: ${LEVELS[this.game.levelNumber].description.en}`,
      style: {
        font: '18px Arial',
        fill: 'white',
        wordWrap: {
          width: SIZES.widthInPixels - (this.padding * 2),
        },
      },
    });
  }

  _addListener() {
    this.input.on('pointerdown', (pointer) => {
      if (pointer.primaryDown) {
        this.scene.start('MainScene');
      }
    });
  }
}
