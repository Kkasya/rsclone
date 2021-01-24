import * as Phaser from 'phaser';
import LASER_OFFSET from './constants/LASER_OFFSET';
import SIZES from './constants/SIZES';

export default class Bullets {
  constructor(scene, laserX, laserY, direction) {
    this._defineOffset(laserX, laserY, direction);
    this._createBulletMechanics(scene, direction);
    this.instance = new Phaser.Class(this.bulletMechanics);
    this._addBulletsGroup(scene);
  }

  _defineOffset(laserX, laserY, direction) {
    this.initX = laserX * SIZES.tileSizeInPixels + LASER_OFFSET[direction].x;
    this.initY = laserY * SIZES.tileSizeInPixels + LASER_OFFSET[direction].y;
  }

  _createBulletMechanics(scene, direction) {
    this.bulletMechanics = {
      Extends: Phaser.GameObjects.Image,
      scene: scene,
      initialize:
        function Bullet() {
          Phaser.GameObjects.Image.call(this, this.scene, 0, 0, 'bullet');
          this.speed = Phaser.Math.GetSpeed(400, 1);
          this.scene.add.existing(this);
          this.setInteractive({ cursor: 'pointer' });

          this.setCollisionWithChar();
          this.setCollisionWithBombs();
        },

      fire: function (x, y) {
        this.setPosition(x, y);
        this.setActive(true);
        this.setVisible(true);

        setTimeout(() => {
          this.setActive(false);
          this.setVisible(false);
        }, 600);
      },

      update: function (time, delta) {
        const mainAxis = LASER_OFFSET[direction].mainAxis;
        this[mainAxis] = LASER_OFFSET[direction].isIncrease
          ? this[mainAxis] + this.speed * delta
          : this[mainAxis] - this.speed * delta;
      },

      setCollisionWithChar: function () {
        this.scene.physics.add.collider(this.scene.char, this, this.collideWitchChar);
      },

      setCollisionWithBombs: function () {
        this.scene.collideObjects.forEach((item) => {
          if (item.texture.key === 'bomb') {
            this.scene.physics.add.collider(item, this, this.collideWithBomb);
          }
        });
      },

      collideWitchChar: function (char, bullet) {
        console.log('collide with char');
      },

      collideWithBomb: function (bomb) {
        // console.log(bomb);
        bomb.explode();
      }
    };
  }

  _addBulletsGroup(scene) {
    this.bullets = scene.physics.add.group({
      classType: this.instance,
      maxSize: 10,
      runChildUpdate: true,
    });
  }
}
