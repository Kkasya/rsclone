import * as Phaser from 'phaser';
import SIZES from './constants/SIZES';
import Preloader from './scenes/Preloader';
import MainScene from './scenes/MainScene';
import WinRound from './scenes/WinRound';
import Death from './scenes/Death';
import RaycasterPlugin from 'phaser3-rex-plugins/plugins/raycaster-plugin.js';

export default class PhaserGame extends Phaser.Game {
  constructor(react) {
    const config = {
      type: Phaser.AUTO,
      width: SIZES.widthInPixels,
      height: SIZES.heightInPixels,
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
          debug: true,
          gravity: { y: 0 },
        },
      },

      plugins: {
        scene: [
          {
            key: 'rexRaycaster',
            plugin: RaycasterPlugin,
            start: true
          },
        ],
      },

      audio: {
        disableWebAudio: true,
      },
    }
    super(config);
    this.react = react;
  }
}
