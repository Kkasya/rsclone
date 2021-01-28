import LASER_OFFSET from '../constants/LASER_OFFSET';
import SIZES from '../constants/SIZES';
import mirrorsReflection from './mirrorsReflection';
import RaysFabric from './RaysFabric';

export default class RaysGenerator {
  constructor(...props) {
    [this.scene, this.sourceX, this.sourceY, this.direction] = [...props];
    this.rays = [];

    if (this.scene?.sys?.config === 'MainScene') {
      this._drawRays();
    }
  }

  _drawRays() {
    [this.x, this.y] = [this.sourceX, this.sourceY];
    const { mainAxis, increment } = LASER_OFFSET[this.direction];
    let isLastRay = false;
    let mirrorType = '';

    for (this[mainAxis] = this[mainAxis] + increment; !isLastRay; this[mainAxis] += increment) {
      if (this._isCollisionWithRock(this.x, this.y)) {
        break;
      }

      for (let j = 0; j < this.scene.collideObjects.length; j++) {
        const item = this.scene.collideObjects[j];
        if (this.x === item.x && this.y === item.y) {
          isLastRay = this._playCollision(this.direction, item);
          if (isLastRay) {
            mirrorType = item.texture.key.split('-')[2];
          }
        }
      }

      const ray = new RaysFabric(
        mainAxis,
        this.scene,
        this.x,
        this.y,
        this.direction,
        isLastRay,
        mirrorType,
      );
      this.rays.push(ray);
    }
  }

  _isCollisionWithRock(x, y) {
    const tile = this.scene.map.getTileAt(x / SIZES.tileSizeInPixels, y / SIZES.tileSizeInPixels);
    return (tile?.properties?.type === 'rock');
  }

  _playCollision(currentDirection, item) {
    if (item.texture.key.includes('mirror-down')) {
      const mirrorType = item.texture.key.split('-')[2];
      const rays = new RaysGenerator(
        this.scene,
        item.x,
        item.y,
        mirrorsReflection(mirrorType, currentDirection),
      );
      this.rays.push(...rays.rays);
      return true;
    }
  }

  setDirection(newDirection) {
    this.direction = newDirection;
    this.refresh();
  }

  refresh() {
    this.rays.forEach((ray) => {
      ray.destroy();
    });
    this.rays.length = 0;
    this._drawRays();
  }
}
