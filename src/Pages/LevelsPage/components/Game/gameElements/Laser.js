import GameObject from './GameObject';
import RaysGenerator from '../rays/RaysGenerator';

export default class Laser extends GameObject {
  createRays() {
    const direction = this.texture.key.split('-')[1];
    this.raysGenerator = new RaysGenerator(this.scene, this.x, this.y, direction);
    this.explodeDelay = 2500;
    this.isDetonateAccept = true;
    this.explodeTimer = null;
  }

  detonate() {
    if (this.isDetonateAccept) {
      this.isDetonateAccept = false;

      this.explodeTimer = setTimeout(() => {
        this.explode();
        this.isDetonateAccept = true;
      }, this.explodeDelay);
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
