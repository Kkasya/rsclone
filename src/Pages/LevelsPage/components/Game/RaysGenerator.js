import Phaser from 'phaser';
import visibilityPriority from './utils/visibilityPriority';
import SIZES from './constants/SIZES';
import { LASER_OFFSET2 } from './constants/LASER_OFFSET';
import mirrorsReflection from './utils/mirrorsReflection';

export default class RaysGenerator {
  constructor(scene, x, y, direction) {
    this.scene = scene;
    this.initX = x;
    this.initY = y;
    this.direction = direction;

    this._drawRays();
  }

  _drawRays() {
    if (this.direction === 'right') {
      outer: for (let i = this.initX + LASER_OFFSET2[this.direction]; ; i += SIZES.tileSize) {
        if (this._isCollisionWithRock(i, this.initY)) {
          break;
        }

        for (let j = 0; j < this.scene.collideObjects.length; j++) {
          const item = this.scene.collideObjects[j];
          if (i === item.x && this.initY === item.y) {
            if (this._playCollision(this.direction, item)) {
              break outer;
            }
          }
        }

        const ray = new RayHor(this.scene, i, this.initY);
      }
    }

    else if (this.direction === 'left') {
      outer: for (let i = this.initX + LASER_OFFSET2[this.direction]; ; i -= SIZES.tileSize) {
        if (this._isCollisionWithRock(i, this.initY)) {
          break;
        }

        for (let j = 0; j < this.scene.collideObjects.length; j++) {
          const item = this.scene.collideObjects[j];
          if (i === item.x && this.initY === item.y) {
            if (this._playCollision(this.direction, item)) {
              break outer;
            }
          }
        }

        const ray = new RayHor(this.scene, i, this.initY);
      }
    }

    else if (this.direction === 'top') {
      outer: for (let i = this.initY + LASER_OFFSET2[this.direction]; ; i -= SIZES.tileSize) {
        if (this._isCollisionWithRock(this.initX, i)) {
          break;
        }

        for (let j = 0; j < this.scene.collideObjects.length; j++) {
          const item = this.scene.collideObjects[j];
          if (this.initX === item.x && i === item.y) {
            if (this._playCollision(this.direction, item)) {
              break outer;
            }
          }
        }

        const ray = new RayVert(this.scene, this.initX, i);
      }
    }

    else if (this.direction === 'bottom') {
      outer: for (let i = this.initY + LASER_OFFSET2[this.direction]; ; i += SIZES.tileSize) {
        if (this._isCollisionWithRock(this.initX, i)) {
          break;
        }

        for (let j = 0; j < this.scene.collideObjects.length; j++) {
          const item = this.scene.collideObjects[j];
          if (this.initX === item.x && i === item.y) {
            if (this._playCollision(this.direction, item)) {
              break outer;
            }
          }
        }

        const ray = new RayVert(this.scene, this.initX, i);
      }
    }
  }

  _isCollisionWithRock(x, y) {
    const tile = this.scene.map.getTileAt(x / 10, y / 10);
    return (tile?.properties?.type === 'rock');
  }

  _playCollision(currentDirection, item) {
    if (item.texture.includes('mirror-down-')) {
      const mirrorType = item.texture.split('-')[2];
      const rays = new RaysGenerator(
        this.scene,
        item.x,
        item.y,
        mirrorsReflection(mirrorType, currentDirection)
      );
      return true;
    }
  }
}

class Rays extends Phaser.Physics.Arcade.Sprite {
  constructor(...props) {
    super(...props);
    this.texture = this.texture.key;
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.setInteractive({ cursor: 'pointer' });
    this.setDepth(visibilityPriority('ray'));

    this._setCollisionWithChar();
    this._setCollisionWithBombs();
  }

  _setCollisionWithChar() {
    this.scene.physics.add.collider(this, this.scene.char, this.scene.interactionWithChar);
  }

  _setCollisionWithBombs() {
    this.scene.collideObjects.forEach((item) => {
      if (item.texture === 'bomb') {
        this.scene.physics.add.collider(item, this, this._collideWithBombs);
      }
    });
  }

  _collideWithBombs(item) {
    item.explode();
  }
}

class RayHor extends Rays {
  constructor(...props) {
    super(...props, 'rayHor');
    this._setOffset();
  }

  _setOffset() {
    this.setPosition(this.x, this.y - 10);
  }
}

class RayVert extends Rays {
  constructor(...props) {
    super(...props, 'rayVert');
  }
}
