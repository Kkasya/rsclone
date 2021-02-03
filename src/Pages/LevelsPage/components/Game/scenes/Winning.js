import * as Phaser from 'phaser';

export default class Winning extends Phaser.Scene {
  constructor() {
    super('Winning');
    this.once = false;
  }

  create() {
    this.add.text(20, 20, 'Congratulations!');
    if (!this.once) {
      this.once = true;
      this._saveProgress();
      this._redirectToMainScene();
    }
  }

  _saveProgress() {
    localStorage.setItem(`dweep-${this.game.levelNumber}`, true);
  }

  _redirectToMainScene() {
    setTimeout(() => {
      this.scene.start('MainScene');
      this.once = false;
    }, 2000);
  }
}
