import * as Phaser from 'phaser';
import TILES_SIZES from './constants/TILES_SIZES';
import Preloader from './scenes/Preloader';
import MainScene from './scenes/MainScene';
import WinRound from './scenes/WinRound';
import Death from './scenes/Death';

export default class PhaserGame extends Phaser.Game {
  constructor(react) {
    const config = {
      type: Phaser.AUTO,
      width: TILES_SIZES.widthInPixels,
      height: TILES_SIZES.heightInPixels,
      scale: {
        zoom: 1.5,
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
          gravity: { y: 0 },
          debug: false,
        },
      },

      audio: {
        disableWebAudio: true,
      },
    }
    super(config);
    this.react = react;
  }
}
