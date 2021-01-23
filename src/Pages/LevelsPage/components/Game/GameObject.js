import Phaser from 'phaser';
import SIZES from './constants/SIZES';

export default class GameObject extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x = 0, y = 0, texture = 'char') {
    super(scene, x, y, texture);
    scene.add.existing(this);
    scene.physics.add.existing(this);

    if (texture !== 'char') {
      this.body.setSize(SIZES.hitboxes.gameObjects, SIZES.hitboxes.gameObjects, false);
      this.body.setOffset(SIZES.halfForOffset, SIZES.halfForOffset);
    }
    this.setInteractive({ cursor: 'pointer' });
  }
}
