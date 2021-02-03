import * as Phaser from 'phaser';

export default class Winning extends Phaser.Scene {
  constructor() {
    super('Winning');
    this.isStarted = false;
  }

  create() {
    this.add.text(20, 20, 'Congratulations!');
    if (!this.isStarted) {
      this.isStarted = true;
      this._saveProgress();
      this._redirectToLevelsPage();
    }
  }

  _saveProgress() {
    localStorage.setItem(`dweep-${this.game.levelNumber}`, true);
  }

  _redirectToLevelsPage() {
    setTimeout(() => {
      this.game.history.push(`/levels`);
    }, 2000);
  }
}
