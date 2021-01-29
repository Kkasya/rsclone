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

    if (!texture.includes('mirror-up') && texture !== 'rock-up') {
      this.setInteractive({ cursor: 'pointer' });
      this._defineHitbox();
    }
    this.setDepth(visibilityPriority(texture));
  }

  _defineHitbox() {
    this.body.setSize(SIZES.hitboxes.small, SIZES.hitboxes.small, false);
    this.body.setOffset(SIZES.halfForOffset, SIZES.halfForOffset);
  }

  setCollisionWithChar() {
    this.scene.physics.add.collider(this, this.scene.char, this.scene.interactionWithChar);
  }
}
