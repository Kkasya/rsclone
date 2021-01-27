import Phaser from 'phaser';
import RaysGenerator from '../rays/RaysGenerator';
import SIZES from '../constants/SIZES';
import visibilityPriority from '../utils/visibilityPriority';

export default class GameObject extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x = 0, y = 0, texture = 'char', isSetupOnField) {
    const xForPhaser = x * SIZES.tileSizeInPixels + SIZES.halfForOffset;
    const yForPhaser = y * SIZES.tileSizeInPixels + SIZES.halfForOffset;

    super(scene, xForPhaser, yForPhaser, texture);
    this.xForPhaser = xForPhaser;
    this.yForPhaser = yForPhaser;
    this.texture = texture;
    this.isSetupOnField = isSetupOnField;

    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.setInteractive({ cursor: 'pointer' });
    this._defineHitbox(texture);
    this.setDepth(visibilityPriority(texture));

    this.explodeDelay = 2500;
    this.isDetonateAccept = true;
    this.explodeTimer = null;
  }

  createRays() {
    const direction = this.texture.split('-')[1];
    this.raysGenerator = new RaysGenerator(this.scene, this.xForPhaser, this.yForPhaser, direction);
  }

  _defineHitbox(texture) {
    if (texture === 'char' || texture === 'bomb' || texture?.includes('mirror-down')) {
      this.body.setSize(SIZES.hitboxes.big, SIZES.hitboxes.big, false);
      this.body.setOffset(12, 8);
    }
    else {
      this.body.setSize(SIZES.hitboxes.small, SIZES.hitboxes.small, false);
      this.body.setOffset(SIZES.halfForOffset, SIZES.halfForOffset);
    }
  }

  setCollisionWithChar() {
    this.scene.physics.add.collider(this, this.scene.char, this.scene.interactionWithChar);
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
    this.scene.removeCollideObject(this);

    if (this.raysGenerator?.rays?.length) {
      this.raysGenerator.rays.forEach((ray) => {
        ray.destroy();
      });
      this.raysGenerator.rays.length = 0;
    }

    if (this.texture === 'bomb') {
      this._explodeNearObjects(this.x, this.y);
    }

    if (this.gameObjectUp) {
      this.gameObjectUp.destroy();
    }

    this.destroy();
  }

  preventExplode() {
    clearTimeout(this.explodeTimer);
    this.isDetonateAccept = true;
  }

  _explodeNearObjects(x, y) {
    for (let i = x - 40; i <= x + 40; i += 40) {
      for (let j = y - 40; j <= y + 40; j += 40) {
        if (i !== j) {
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
}
