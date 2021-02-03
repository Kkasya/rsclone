import * as Phaser from 'phaser';

export default class Winning extends Phaser.Scene {
  constructor() {
    super('Winning');
  }

  create() {
    this.add.text(20, 20, 'Congratulations!');
    setTimeout(() => {
      this.scene.start('MainScene');
    }, 2000);
  }
}
