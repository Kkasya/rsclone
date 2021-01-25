import Phaser from 'phaser';
import visibilityPriority from '../utils/visibilityPriority';

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
    this._setCollisionWithLasers();
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

  _setCollisionWithLasers() {
    this.scene.collideObjects.forEach((item) => {
      if (item.texture.includes('laser')) {
        this.scene.physics.add.collider(item, this, this._collideWithLasers);
      }
    });
  }

  _collideWithLasers(item) {
    item.explode();
  }
}

export class RayHor extends Rays {
  constructor(...props) {
    super(...props, 'rayHor');
    this._setOffset();
  }

  _setOffset() {
    this.setPosition(this.x, this.y - 10);
  }
}

export class RayVert extends Rays {
  constructor(...props) {
    super(...props, 'rayVert');
  }
}
