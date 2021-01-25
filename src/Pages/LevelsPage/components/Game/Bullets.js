import * as Phaser from 'phaser';
import { LASER_OFFSET } from './constants/LASER_OFFSET';
import SIZES from './constants/SIZES';
import visibilityPriority from './utils/visibilityPriority';

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
      direction: direction,
      scene: scene,
      initialize:
        function Bullet() {
          Phaser.GameObjects.Image.call(this, this.scene, 0, 0, 'bullet');
          this.speed = Phaser.Math.GetSpeed(400, 1);
          this.scene.add.existing(this);
          this.setInteractive({ cursor: 'pointer' });
          this.setDepth(visibilityPriority('bullet'));

          this.setCollisionWithChar();
          this.setCollisionWithBombs();
          this.setCollisionWithMirrors();
        },

      fire: function (x, y) {
        this.setPosition(x, y);
        this.setActive(true);
        this.setVisible(true);

        // setTimeout(() => {
        //   this.setActive(false);
        //   this.setVisible(false);
        // }, 2000);
      },

      update: function (time, delta) {
        const mainAxis = LASER_OFFSET[this.direction].mainAxis;
        this[mainAxis] = LASER_OFFSET[this.direction].isIncrease
          ? this[mainAxis] + this.speed
          : this[mainAxis] - this.speed;
      },

      setCollisionWithChar: function () {
        this.scene.physics.add.collider(this.scene.char, this, this.collideWithChar);
      },

      collideWithChar: function () {
        if (scene.isCollideAccept) {
          scene.char.addHeatByLaser();
          scene.isCollideAccept = false;
          scene.isReadyToToggleCollide = true;
        }
      },

      setCollisionWithBombs: function () {
        this.scene.collideObjects.forEach((item) => {
          if (item.texture.key === 'bomb') {
            this.scene.physics.add.collider(item, this, this.collideWithBombs);
          }
        });
      },

      collideWithBombs: function (bomb) {
        // console.log(bomb);
        bomb.explode();
      },

      setCollisionWithMirrors: function () {
        this.scene.collideObjects.forEach((item) => {
          if (item.texture.key.includes('mirror-down')) {
            const mirrorType = item.texture.key.split('-')[2];
            this.scene.physics.add.collider(item, this, () => this.collideWithMirrors(mirrorType));
          }
        });
      },

      collideWithMirrors: function (mirrorType) {
        if (this.direction === 'right' && mirrorType === 'right') {
          this.direction = 'top';
        }
        else if (this.direction === 'top' && mirrorType === 'right') {
          this.direction = 'right';
        }
      },
    };
  }

  _addBulletsGroup(scene) {
    this.bullets = scene.physics.add.group({
      classType: this.instance,
      // maxSize: 70,
      runChildUpdate: true,
    });
  }
}
