import * as Phaser from 'phaser';

export default class Death extends Phaser.Scene {
  constructor() {
    super('Death');
  }

  create() {
    this.add.text(20, 20, 'You lose!');

    this.input.on('pointerdown', (pointer) => {
      if (pointer.primaryDown) {
        this.scene.start('MainScene');
      }
    });
  }
}
