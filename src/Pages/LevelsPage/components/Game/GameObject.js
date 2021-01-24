import Phaser from 'phaser';
import Bullets from './Bullets';
import SIZES from './constants/SIZES';

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

    this._setDepth(texture);
    if (texture.includes('laser')) {
      this._createBullets(texture, x, y);
    }
  }

  _setDepth(texture) {
    if (texture.includes('mirror-up')) {
      this.setDepth(3);
    }
    else {
      this.setDepth(1);
    }
  }

  _createBullets(texture, x, y) {
    if (texture.includes('laser')) {
      const direction = texture.split('-')[1];
      const bulletsObj = new Bullets(this.scene, x, y, direction);
      this.bulletsObj = bulletsObj;
    }
  }

  _defineHitbox(texture) {
    if (texture === 'char' || texture === 'bomb') {
      this.body.setSize(SIZES.hitboxes.char, SIZES.hitboxes.char, false);
      this.body.setOffset(12, 8);
    }
    else {
      this.body.setSize(SIZES.hitboxes.gameObjects, SIZES.hitboxes.gameObjects, false);
      this.body.setOffset(SIZES.halfForOffset, SIZES.halfForOffset);
    }
  }

  setCollisionWithChar() {
    this.scene.physics.add.collider(this, this.scene.char, this.scene.interactionWithChar);
  }

  explode() {
    // console.log('explode!');
    // setTimeout(() => {
    //   this.destroy();
    // }, this.explodeDelay);
  }
}
