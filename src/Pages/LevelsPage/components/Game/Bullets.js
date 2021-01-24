import * as Phaser from 'phaser';
import LASER_OFFSET from './constants/LASER_OFFSET';
import SIZES from './constants/SIZES';

export default class Bullets {
  constructor(scene, laserX, laserY, direction) {
    this._defineOffset(laserX, laserY, direction);
    this._createBulletMechanics(direction);
    this.instance = new Phaser.Class(this.bulletMechanics);
    this._addBulletsGroup(scene);
  }

  _defineOffset(laserX, laserY, direction) {
    this.initX = laserX * SIZES.tileSizeInPixels + LASER_OFFSET[direction].x;
    this.initY = laserY * SIZES.tileSizeInPixels + LASER_OFFSET[direction].y;
  }

  _createBulletMechanics(direction) {
    this.bulletMechanics = {
      Extends: Phaser.GameObjects.Image,
      initialize:
        function Bullet(scene) {
          Phaser.GameObjects.Image.call(this, scene, 0, 0, 'bullet');
          this.speed = Phaser.Math.GetSpeed(400, 1);
          scene.add.existing(this);
          this.setInteractive({ cursor: 'pointer' });

          scene.physics.add.collider(scene.char, this, this.collideWitchChar);

          scene.collideObjects.forEach((item) => {
            if (item.texture.key === 'bomb') {
              scene.physics.add.collider(item, this, this.collideWithBomb);
            }
          });
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

      collideWitchChar: function (char, bullet) {
        // console.log('collide with char');
      },

      collideWithBomb: function (bomb) {
        // console.log(bomb);
        // bomb.explode();
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
