import GameObject from './GameObject';
import DIFFERENT_CONSTANTS from '../constants/DIFFERENT_CONSTANTS';
import SIZES from '../constants/SIZES';

export default class Bomb extends GameObject {
  constructor(...props) {
    super(...props, 'bomb');
    this.isDetonateAccept = true;
    this.explodeTimer = null;
    this._addListeners();
  }

  _defineHitbox() {
    this.body.setSize(SIZES.hitboxes.big, SIZES.hitboxes.big, false);
    this.body.setOffset(SIZES.offsetsForBigHitbox.x, SIZES.offsetsForBigHitbox.y);
  }

  _addListeners() {
    this.on('pointerdown', (pointer) => {
      if (pointer.primaryDown) {
        const actionType = this.scene.activeItem.image.texture.key;
        if (actionType === 'torch' || actionType === 'pail') {
          this._addTorchOrPail(actionType);
        }
      }
    });
  }

  _addTorchOrPail(actionType) {
    actionType === 'torch'
      ? this.detonate()
      : this._preventExplode();
    
    this.scene.stock.removeActiveItem();
    this.scene.activeItem.reset();
  }

  detonate() {
    if (this.isDetonateAccept) {
      this.isDetonateAccept = false;

      this.explodeTimer = setTimeout(() => {
        this.explode();
        this.isDetonateAccept = true;
      }, DIFFERENT_CONSTANTS.explodeDelay.bombs);
    }
  }

  explode() {
    if (this.scene) {
      this.scene.removeItem(this.scene.collideObjects, this);
      this._explodeNearObjects(this.x, this.y);
      this.scene.refreshLasers();
      this.destroy();
    }
  }

  _preventExplode() {
    clearTimeout(this.explodeTimer);
    this.isDetonateAccept = true;
  }

  _explodeNearObjects(x, y) {
    for (let i = x - SIZES.tileSize; i <= x + SIZES.tileSize; i += SIZES.tileSize) {
      for (let j = y - SIZES.tileSize; j <= y + SIZES.tileSize; j += SIZES.tileSize) {
        if (this.scene.char.x === i && this.scene.char.y === j) {
          this.scene.char.explode();
        }
        this.scene.collideObjects.forEach((item) => {
          if (item.x === i && item.y === j) {
            item.explode();
          }
        });
      }
    }
  }
}
