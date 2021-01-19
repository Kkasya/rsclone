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
    this.setInteractive().on('pointerdown', (pointer, localX, localY, event) => {
      const actionType = this.scene.activeItem.type;
      if (actionType) {
        switch (actionType) {
          case 'pail':
            this.addPile();
            this.scene.resetActiveItem();
            break;

          case 'torch':
            this.addHeatByTorch();
            this.scene.resetActiveItem();
            break;

          default: console.log(`${actionType} is unacceptable to character`);
        }
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
