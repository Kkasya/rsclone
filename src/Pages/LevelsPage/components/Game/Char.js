import GameObject from './GameObject';

export default class Char extends GameObject {
  constructor(...props) {
    super(...props);

    // this.isNormal = true;
    // this.isDead = false;

    this.isFreeze = false;
    this.isWet = false;
    this.isFlying = false;
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
