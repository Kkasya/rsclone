import Phaser from 'phaser';
import RaysGenerator from './RaysGenerator';
import SIZES from './constants/SIZES';
import visibilityPriority from './utils/visibilityPriority';

export default class GameObject extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x = 0, y = 0, texture = 'char') {
    const xForPhaser = x * SIZES.tileSizeInPixels + SIZES.halfForOffset;
    const yForPhaser = y * SIZES.tileSizeInPixels + SIZES.halfForOffset;

    super(scene, xForPhaser, yForPhaser, texture);
    this.xForPhaser = xForPhaser;
    this.yForPhaser = yForPhaser;
    this.texture = texture;

    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.setInteractive({ cursor: 'pointer' });
    this._defineHitbox(texture);
    this.setDepth(visibilityPriority(texture));

    this.explodeDelay = 2500;
    this.isExplodeAccept = true;
    this.explodeTimer = null;
  }

  createRays() {
    const direction = this.texture.split('-')[1];
    const rays = new RaysGenerator(this.scene, this.xForPhaser, this.yForPhaser, direction);
  }

  _defineHitbox(texture) {
    if (texture === 'char' || texture === 'bomb' || texture.includes('mirror-down')) {
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

  explode() {
    if (this.isExplodeAccept) {
      this.isExplodeAccept = false;

      console.log('explode!');
      this.explodeTimer = setTimeout(() => {
        this.destroy();
        this.isExplodeAccept = true;
      }, this.explodeDelay);
    }
  }

  preventExplode() {
    clearTimeout(this.explodeTimer);
    this.isExplodeAccept = true;
  }
}
