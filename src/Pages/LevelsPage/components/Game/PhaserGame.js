import * as Phaser from 'phaser';
import SIZES from './constants/SIZES';
import Preloader from './scenes/Preloader';
import MainScene from './scenes/MainScene';
import WinRound from './scenes/WinRound';
import Death from './scenes/Death';

export default class PhaserGame extends Phaser.Game {
  constructor(levelNumber) {
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
        MainScene,
        WinRound,
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
    this.levelNumber = levelNumber;
  }
}
