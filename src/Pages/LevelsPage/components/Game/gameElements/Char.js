import GameObject from './GameObject';
import visibilityPriority from '../utils/visibilityPriority';

export default class Char extends GameObject {
  constructor(...props) {
    super(...props);
    this.setCollideWorldBounds(true);
    this.setDepth(visibilityPriority('char'));

    // this.isNormal = true;
    // this.isDead = false;

    this.isFreeze = false;
    this.isWet = false;
    this.isFlying = false;
    this._addListener();
  }

  _addListener() {
    this.on('pointerdown', () => {
      const actionType = this.scene.activeItem.image.texture.key;
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
      this.scene.isReadyToToggleCollide = true;
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

  addHeatByLaser() {
    if (this.isWet) {
      this.isWet = false;
      this.scene.isReadyToToggleCollide = true;
    }
    else {
      this.scene.scene.start('Death');
    }
  }

  addHeatByFire() {
    if (this.isWet) {
      this.isWet = false;
    }
    else {
      this.isFlying = true;
    }
    this.scene.isReadyToToggleCollide = true;
  }
}
