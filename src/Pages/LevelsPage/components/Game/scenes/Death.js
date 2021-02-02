import * as Phaser from 'phaser';

export default class Death extends Phaser.Scene {
  constructor() {
    super('Death');
  }

  create() {
    this.add.text(20, 20, 'You lose!');

    setTimeout(() => {
      this.scene.start('MainScene');
    }, 2000);
  }
}
