import GameObject from './GameObject';
import RaysGenerator from '../rays/RaysGenerator';
import DIFFERENT_CONSTANTS from '../constants/DIFFERENT_CONSTANTS';
import mirrorsWrench from '../utils/mirrorsWrench';

export default class Laser extends GameObject {
  constructor(...props) {
    super(...props);
    this._addListenerToWrench();
  }

  createRays() {
    this.direction = this.texture.key.split('-')[1];
    this.raysGenerator = new RaysGenerator(this.scene, this.x, this.y, this.direction);
    this.isDetonateAccept = true;
    this.explodeTimer = null;
  }

  _addListenerToWrench() {
    this.on('pointerdown', (pointer) => {
      if (pointer.primaryDown) {
        const actionType = this.scene.activeItem.image.texture.key;
        if (actionType.includes('wrench')) {
          const isClockwise = actionType.split('-')[1] === 'right';
          const newDirection = mirrorsWrench(this.direction, isClockwise);
          this._setDirection(newDirection);
          this.scene.stock.removeActiveItem();
          this.scene.activeItem.reset();
        }
      }
    });
  }

  _setDirection(newDirection) {
    const newTexture = this.texture.key.replace(this.direction, newDirection);
    this.direction = newDirection;
    this.setTexture(newTexture);
    this.raysGenerator.setDirection(this.direction);
  }

  detonate() {
    if (this.isDetonateAccept) {
      this.isDetonateAccept = false;

      this.explodeTimer = setTimeout(() => {
        this.explode();
        this.isDetonateAccept = true;
      }, DIFFERENT_CONSTANTS.explodeDelay);
    }
  }

  explode() {
    this.scene.removeItem(this.scene.collideObjects, this);
    if (this.raysGenerator.rays?.length) {
      this.raysGenerator.rays.forEach((ray) => {
        ray.destroy();
      });
      this.raysGenerator.rays.length = 0;
    }

    this.scene.refreshLasers();
    this.destroy();
  }
}
