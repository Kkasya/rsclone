import Phaser from 'phaser';
import SIZES from './constants/SIZES';

export default class GameObject extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x = 0, y = 0, texture = 'char') {
    super(scene, x, y, texture);
    this.scene = scene;
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.body.setSize(SIZES.hitbox, SIZES.hitbox, false);
    this.setInteractive({ cursor: 'pointer' });
  }
}
