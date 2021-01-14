import Phaser from 'phaser';

export default class Char extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x = 0, y = 0, texture = 'char') {
    super(scene, x, y, texture);
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setInteractive();
    // this.body.setSize(this.width * 0.4, this.height * 0.9);
    // this.body.setOffset(34, 8);
    this.setCollideWorldBounds(true);

    // [up, upright, down, right, rightdown].forEach(
    //   scene.anims.create.bind(scene.anims)
    // );
  }
}
