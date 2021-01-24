import Phaser from 'phaser';
import Bullets from './Bullets';
import SIZES from './constants/SIZES';
import visibilityPriority from './utils/visibilityPriority';

export default class GameObject extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x = 0, y = 0, texture = 'char') {
    const xForPhaser = x * SIZES.tileSizeInPixels + SIZES.halfForOffset;
    const yForPhaser = y * SIZES.tileSizeInPixels + SIZES.halfForOffset;

    super(scene, xForPhaser, yForPhaser, texture);
    this.scene = scene
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.setInteractive({ cursor: 'pointer' });
    this._defineHitbox(texture);
    this.explodeDelay = 2500;

    this.setDepth(visibilityPriority(texture));
    if (texture.includes('laser')) {
      this._createBullets(texture, x, y);
    }

    this.isExplodeAccept = true;
    this.explodeTimer = null;
  }

  _createBullets(texture, x, y) {
    if (texture.includes('laser')) {
      const direction = texture.split('-')[1];
      const bulletsObj = new Bullets(this.scene, x, y, direction);
      this.bulletsObj = bulletsObj;
    }
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
