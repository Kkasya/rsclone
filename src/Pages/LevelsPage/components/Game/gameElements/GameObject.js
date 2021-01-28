import Phaser from 'phaser';
import SIZES from '../constants/SIZES';
import visibilityPriority from '../utils/visibilityPriority';

export default class GameObject extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, texture, isSetupOnField) {
    const xForPhaser = x * SIZES.tileSizeInPixels + SIZES.halfForOffset;
    const yForPhaser = y * SIZES.tileSizeInPixels + SIZES.halfForOffset;

    super(scene, xForPhaser, yForPhaser, texture);
    this.isSetupOnField = isSetupOnField;
    scene.add.existing(this);
    scene.physics.add.existing(this);

    if (!texture.includes('mirror-up') && !texture.includes('rock-up')) {
      this.setInteractive({ cursor: 'pointer' });
      this._defineHitbox(texture);
    }
    this.setDepth(visibilityPriority(texture));
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

  explode() {
    this.scene.removeItem(this.scene.collideObjects, this);
    this.scene.refreshLasers();
    this.destroy();
  }
}
