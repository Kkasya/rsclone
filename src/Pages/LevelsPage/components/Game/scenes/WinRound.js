import * as Phaser from 'phaser';

export default class WinRound extends Phaser.Scene {
  constructor() {
    super('WinRound');
  }

  create() {
    this.add.text(20, 20, 'Congratulations!');

    setTimeout(() => {
      this.scene.start('MainScene');
    }, 2000);
  }
}
