import GameObject from './GameObject';
import SIZES from '../constants/SIZES';
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
    this.toFlyingPositions = [0.5, 0.6, 0.7, 0.8];
    this._addListener();
  }

  _defineHitbox() {
    this.body.setSize(SIZES.hitboxes.big, SIZES.hitboxes.big, false);
    this.body.setOffset(SIZES.offsetsForBigHitbox.x, SIZES.offsetsForBigHitbox.y);
  }

  _addListener() {
    this.on('pointerdown', () => {
      const actionType = this.scene.activeItem.image.texture.key;
      if (actionType) {
        if (actionType === 'pail' || actionType === 'torch') {
          if (actionType === 'pail') {
            this.addPail();
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
      this._setTexture('freeze');
    }
  }

  addPail() {
    if (!this.isFreeze) {
      this.isFlying = false;
      this.isWet = true;

      if (this.texture.key === 'char-flying') {
        this.scene.isCollideAccept = false;
        this.scene.isReadyToToggleCollide = true;
      }
      this._setTexture('wet');
    }
  }

  addHeatByTorch() {
    if (this.isFreeze) {
      this.isFreeze = false;
      this.isWet = true;
      this._setTexture('wet');
    }
    else if (this.isWet) {
      this.isWet = false;
      this._setTexture('normal');
    }
  }

  addHeatByLaser() {
    if (this.isWet) {
      this.scene.isReadyToToggleCollide = true;
      this.isWet = false;
      this._setTexture('normal');
    }
    else {
      this.scene.scene.start('Death');
    }
  }

  addHeatByFire() {
    if (this.isWet) {
      this.isWet = false;
      this._setTexture('normal');
    }
    else {
      this.isFlying = true;
      this._setTexture('flying');
    }
    this.scene.isReadyToToggleCollide = true;
  }

  _setTexture(state) {
    if (this.texture.key === 'char-flying') {
      clearInterval(this.intervalToLevitate);
      this._addFlyingAnimation('down');
    }

    this.setTexture(`char-${state}`);
    if (state === 'flying') {
      this._addFlyingAnimation('up');
    }
  }

  _addFlyingAnimation(upOrDown) {
    const arr = [...this.toFlyingPositions];
    if (upOrDown === 'down') {
      arr.reverse();
    }

    let count = 0;
    this.intervalToFlying = setInterval(() => {
      this.setOrigin(0.5, arr[count]);
      count++;
      if (count >= arr.length) {
        clearInterval(this.intervalToFlying);
        if (upOrDown === 'up') {
          this._addLevitateAnimation();
        }
      }
    }, 100);
  }

  _addLevitateAnimation() {
    let count = 0;
    this.intervalToLevitate = setInterval(() => {
      count & 1
        ? this.setOrigin(0.5, 0.8)
        : this.setOrigin(0.5, 0.85);
      count++;
    }, 400);
  }

  explode() {
    console.log('char was exploded!');
    this.scene.scene.start('Death');
  }
}
