import * as Phaser from 'phaser';
import LASER_OFFSET from './constants/LASER_OFFSET';

export default class Bullets {
  constructor(scene, laserX, laserY, direction) {
    this._defineOffset(laserX, laserY, direction);
    this._createBulletMechanics(direction);
    this.instance = new Phaser.Class(this.bulletMechanics);
    this._addBulletsGroup(scene);
  }

  _defineOffset(laserX, laserY, direction) {
    this.initX = laserX + LASER_OFFSET[direction].x;
    this.initY = laserY + LASER_OFFSET[direction].y;
  }

  _createBulletMechanics(direction) {
    this.bulletMechanics = {
      Extends: Phaser.GameObjects.Image,
      initialize:
        function Bullet(scene) {
          Phaser.GameObjects.Image.call(this, scene, 0, 0, 'bullet');
          scene.add.existing(this);
          this.setInteractive({ cursor: 'pointer' });
          scene.physics.add.collider(scene.char, this, this.collide);
          this.speed = Phaser.Math.GetSpeed(400, 1);
        },

      fire: function (x, y) {
        this.setPosition(x, y);
        this.setActive(true);
        this.setVisible(true);

        setTimeout(() => {
          this.setActive(false);
          this.setVisible(false);
        }, 200);
      },

      update: function (time, delta) {
        const mainAxis = LASER_OFFSET[direction].mainAxis;
        this[mainAxis] = LASER_OFFSET[direction].isIncrease
          ? this[mainAxis] + this.speed * delta
          : this[mainAxis] - this.speed * delta;
      },

      collide: function (char, bullet) {
        console.log(char);
        console.log(bullet);
      }
    };
  }

  _addBulletsGroup(scene) {
    this.bullets = scene.physics.add.group({
      classType: this.instance,
      maxSize: 40,
      runChildUpdate: true,
    });
  }
}
