import * as Phaser from 'phaser';
import MoveToPlugin from 'phaser3-rex-plugins/plugins/moveto-plugin.js';
import gameConstants from './gameConstants';
import MainScene from './MainScene';

export default class PhaserGame extends Phaser.Game {
  constructor(react) {
    const config = {
      type: Phaser.AUTO,
      width: gameConstants.sizeInPixels,
      height: gameConstants.sizeInPixels,
      audio: {
        disableWebAudio: true,
      },
      parent: 'gameContainer',
      scene: [MainScene],
      scale: {
        zoom: 1.5,
      },

      render: {
        pixelArt: true,
        antialias: false,
        autoResize: false,
      },
      plugins: {
        global: [
          {
            key: 'rexMoveTo',
            plugin: MoveToPlugin,
            start: true,
          },
        ],
      },
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 0 },
          debug: false,
        },
      },
    }
    super(config);
    this.react = react;
  }
}
