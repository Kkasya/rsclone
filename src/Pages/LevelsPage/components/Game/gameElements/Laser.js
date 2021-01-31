import GameObject from './GameObject';
import RaysGenerator from '../rays/RaysGenerator';
import SIZES from '../constants/SIZES';
import { lasersSlidesQuantity } from '../constants/SPRITES_ANIMATION';
import DIFFERENT_CONSTANTS from '../constants/DIFFERENT_CONSTANTS';
import mirrorsWrench from '../utils/mirrorsWrench';

export default class Laser extends GameObject {
  constructor(...props) {
    super(...props);
    this._addListenerToWrench();
    if (this.texture.key !== 'laser-top') {
      this._createAnimation();
    }
  }

  _defineHitbox() {
    this.body.setSize(SIZES.hitboxes.big, SIZES.hitboxes.big, false);
    this.body.setOffset(SIZES.offsetsForBigHitbox.x, SIZES.offsetsForBigHitbox.y);
  }

  _addListenerToWrench() {
    this.on('pointerdown', (pointer) => {
      if (pointer.primaryDown) {
        const actionType = this.scene.activeItem.image.texture.key;
        if (actionType.startsWith('wrench')) {
          const isClockwise = actionType.split('-')[1] === 'right';
          const newDirection = mirrorsWrench(this.direction, isClockwise);
          this._setDirection(newDirection);
          this.scene.stock.removeActiveItem();
          this.scene.activeItem.reset();
        }
      }
    });
  }

  _createAnimation() {
    const frames = Array(lasersSlidesQuantity).fill(0).map((item, index) => {
      return {
        key: `${this.texture.key}-${index + 1}`,
        duration: 90,
      }
    });

    this.scene.anims.create({
      key: `working-${this.texture.key}`,
      frames: [...frames],
      frameRate: 30,
      repeat: -1,
    });
    this.play(`working-${this.texture.key}`);
  }

  createRays() {
    this.direction = this.texture.key.split('-')[1];
    this.raysGenerator = new RaysGenerator(this.scene, this.x, this.y, this.direction);
  }

  _setDirection(newDirection) {
    const newTexture = this.texture.key.replace(this.direction, newDirection);
    this.direction = newDirection;
    this.setTexture(newTexture);
    this.raysGenerator.setDirection(this.direction);
  }

  detonate() {
    setTimeout(() => {
      this.explode();
    }, DIFFERENT_CONSTANTS.explodeDelay);
  }

  explode() {
    setTimeout(() => {
      if (this.scene) {
        this.scene.removeItemFromArray(this.scene.collideObjects, this);
        if (this.raysGenerator.rays?.length) {
          this.raysGenerator.rays.forEach((ray) => {
            ray.destroy();
          });
          this.raysGenerator.rays.length = 0;
        }

        this.scene.refreshLasers();
        this.destroy();
      }
    }, DIFFERENT_CONSTANTS.explodeDelay);
  }
}
