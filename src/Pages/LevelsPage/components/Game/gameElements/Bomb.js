import GameObject from './GameObject';
import { bombExplodeArr } from '../constants/SPRITES_ANIMATION';
import ExplodingObject from './ExplodingObject';
import DIFFERENT_CONSTANTS from '../constants/DIFFERENT_CONSTANTS';
import SIZES from '../constants/SIZES';

export default class Bomb extends GameObject {
  constructor(...props) {
    super(...props, 'bomb');
    this.isDetonateAccept = true;
    this.explodeTimer = null;
    this._addListeners();
    this._createAnimationDetonate();
    this._createArrExplodeSprites();
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

  _createAnimationDetonate() {
    this.scene.anims.create({
      key: 'detonate',
      frames: [
        {
          key: 'bomb-detonate1',
          duration: 30,
        },
        {
          key: 'bomb-detonate2',
          duration: 30,
        },
      ],
      frameRate: 30,
      repeat: -1,
    });
  }

  _createArrExplodeSprites() {
    this.arrExplodeSprites = Array(bombExplodeArr.length).fill(0).map((item, index) => {
      return {
        key: bombExplodeArr[index],
        duration: 80,
      };
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
      this.play('detonate');

      this.explodeTimer = setTimeout(() => {
        this.explode();
        this.isDetonateAccept = true;
      }, DIFFERENT_CONSTANTS.detonateDelay);
    }
  }

  explode() {
    setTimeout(() => {
      if (this.scene) {
        this._explodeNearObjects(this.x, this.y);
        this.scene?.removeItemFromArray(this.scene?.collideObjects, this);
        this.scene?.refreshLasers();
        this.destroy();
      }
    }, DIFFERENT_CONSTANTS.explodeDelay);
  }

  _preventExplode() {
    clearTimeout(this.explodeTimer);
    this.stop('detonate');
    this.setTexture('bomb');
    this.isDetonateAccept = true;
  }

  _explodeNearObjects(x, y) {
    let a = 0;
    for (let i = x - SIZES.tileSize; i <= x + SIZES.tileSize; i += SIZES.tileSize, a++) {
      let b = 0;
      for (let j = y - SIZES.tileSize; j <= y + SIZES.tileSize; j += SIZES.tileSize, b++) {
        this._createExplodeSprite(i, j);
        if (!(a === 1 && b === 1)) {
          if (this.scene.char.x === i && this.scene.char.y === j) {
            this.scene.char.die();
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

  _createExplodeSprite(i, j) {
    const explodingObject = new ExplodingObject(
      this.scene,
      (i - SIZES.halfForOffset) / SIZES.tileSizeInPixels,
      (j - SIZES.halfForOffset) / SIZES.tileSizeInPixels,
      this.arrExplodeSprites,
    );

    explodingObject.play('explode');
    setTimeout(() => {
      explodingObject.destroy();
    }, DIFFERENT_CONSTANTS.explodeDelay);
  }
}
