import GameObject from './GameObject';
import RaysGenerator from '../rays/RaysGenerator';

export default class Laser extends GameObject {
  constructor(...props) {
    super(...props);
  }

  createRays() {
    const direction = this.texture.split('-')[1];
    this.raysGenerator = new RaysGenerator(this.scene, this.x, this.y, direction);
  }

  explode() {
    this.scene.removeCollideObject(this);
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
