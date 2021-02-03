import * as Phaser from 'phaser';

export default class Death extends Phaser.Scene {
  constructor() {
    super('Death');
  }

  create() {
    this.add.text(20, 20, 'You lose!');
    this._restartLevel();
  }

  _restartLevel() {
    setTimeout(() => {
      this.scene.start('Hint');
      this.game.audioplayer.play();
    }, 2000);
  }
}
