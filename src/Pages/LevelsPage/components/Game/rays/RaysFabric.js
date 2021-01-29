import Phaser from 'phaser';
import visibilityPriority from '../utils/visibilityPriority';

class Rays extends Phaser.Physics.Arcade.Sprite {
  constructor(...props) {
    super(...props);
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.setInteractive({ cursor: 'pointer' });
    this.setDepth(visibilityPriority('ray'));

    this._setCollisionWithChar();
    this._setCollisionWithBombsAndLasers();
  }

  _setCollisionWithChar() {
    this.scene.physics.add.collider(this, this.scene.char, this.scene.interactionWithChar);
  }

  _setCollisionWithBombsAndLasers() {
    this.scene.collideObjects.forEach((item) => {
      const key = item.texture.key;
      if (key.startsWith('bomb') || key.startsWith('laser')) {
        this.scene.physics.add.collider(item, this, () => item.detonate());
      }
    });
  }
}

class RayHor extends Rays {
  constructor(scene, x, y, direction, isLastRay, mirrorType) {
    super(scene, x, y, 'rayHor');

    if (isLastRay) {
      this._setLastTexture(direction, mirrorType);
    }
    else {
      this._setOffset();
    }
  }

  _setLastTexture(direction, mirrorType) {
    if (direction === mirrorType) {
      this.setTexture(`ray-short-${mirrorType}`);
    }
    else {
      this.setTexture(`ray-angle-from-${mirrorType}`);
      this.setDepth(visibilityPriority('ray-priority'));
    }
  }

  _setOffset() {
    this.setPosition(this.x, this.y - 10);
  }
}

class RayVert extends Rays {
  constructor(scene, x, y, direction, isLastRay, mirrorType) {
    super(scene, x, y, 'rayVert');

    if (isLastRay) {
      this._setLastTexture(direction, mirrorType);
    }
  }

  _setLastTexture(direction, mirrorType) {
    if (direction === 'bottom') {
      this.setTexture(`ray-short-${mirrorType}`);
    }
    else if (direction === 'top') {
      this.setTexture(`ray-angle-from-${mirrorType}`);
      this.setDepth(visibilityPriority('ray-priority'));
    }
  }
}

export default class RaysFabric {
  constructor(primAxis, ...props) {
    if (primAxis === 'x') {
      return new RayHor(...props);
    }
    if (primAxis === 'y') {
      return new RayVert(...props);
    }
  }
}
