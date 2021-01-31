import GameObject from './GameObject';
import SIZES from '../constants/SIZES'

export default class Kids extends GameObject {
  constructor(...props) {
    super(...props, 'kids');
    this._createKids();
    this._createTweens();
    this._addTweens();
  }

  _createKids() {
    this.kids = [
      {
        color: 'blue',
        initX: -10,
        initY: -13,
        tween: null,
        jumpHeight: 20,
        duration: 840,
      },
      {
        color: 'pink',
        initX: -1,
        initY: 9,
        tween: null,
        jumpHeight: 32,
        duration: 1240,
      },
      {
        color: 'yellow',
        initX: 13,
        initY: -3,
        tween: null,
        jumpHeight: 15,
        duration: 900,
      },
    ];
  }

  _createTweens() {
    this.kids.forEach((kid) => {
      const x = (this.x - SIZES.halfForOffset + kid.initX) / SIZES.tileSizeInPixels;
      const y = (this.y - SIZES.halfForOffset + kid.initY) / SIZES.tileSizeInPixels;
      kid.tween = new GameObject(this.scene, x, y, `kid-${kid.color}`);
    });
  }

  _addTweens() {
    this.kids.forEach((kid) => {
      this.scene.tweens.add({
        targets: kid.tween,
        x: this.x + kid.initX,
        y: this.y + kid.initY - kid.jumpHeight,
        duration: kid.duration,
        repeat: -1,
        yoyo: true,
        ease: 'Bounce.In',
      });
    });
  }
}
