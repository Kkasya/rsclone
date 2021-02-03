import * as Phaser from 'phaser';
import SIZES from './constants/SIZES';
import Preloader from './scenes/Preloader';
import Hint from './scenes/Hint';
import MainScene from './scenes/MainScene';
import Winning from './scenes/Winning';
import Death from './scenes/Death';

export default class PhaserGame extends Phaser.Game {
  constructor(history, levelNumber) {
    const config = {
      type: Phaser.AUTO,
      width: SIZES.widthInPixels,
      height: SIZES.heightInPixels,
      scale: {
        zoom: 1,
      },

      parent: 'gameContainer',
      scene: [
        Preloader,
        Hint,
        MainScene,
        Winning,
        Death,
      ],

      physics: {
        default: 'arcade',
        arcade: {
          debug: false,
          gravity: { y: 0 },
        },
      },

      audio: {
        disableWebAudio: true,
      },
    }

    super(config);
    this.history = history;
    this.levelNumber = levelNumber;
  }
}
