import GameObject from './GameObject';

export default class Char extends GameObject {
  constructor(...props) {
    super(...props);
    this.setCollideWorldBounds(true);

    // this.isNormal = true;
    // this.isDead = false;
    this.isFreeze = false;
    this.isWet = false;
    this.isFlying = false;
    this._setInteractive();
  }

  _setInteractive() {
    this.setInteractive().on('pointerdown', () => {
      const actionType = this.scene.activeItem.type;
      if (actionType) {
        if (actionType === 'pail' || actionType === 'torch') {
          if (actionType === 'pail') {
            this.addPile();
          }
          else {
            this.addHeatByTorch();
          }
          this.scene.stock.removeActiveItem();
        }
        this.scene.activeItem.reset();
      }
    });
  }

  addFreeze() {
    if (!this.isFlying) {
      this.isFreeze = true;
    }
  }

  addPile() {
    if (!this.isFreeze) {
      this.isFlying = false;
      this.isWet = true;
    }
  }

  addHeatByTorch() {
    if (this.isFreeze) {
      this.isFreeze = false;
      this.isWet = true;
    }
    else if (this.isWet) {
      this.isWet = false;
    }
  }

  addHeatByFire() {
    if (this.isWet) {
      this.isWet = false;
    }
    else {
      this.isFlying = true;
    }
  }
}
