import GameObject from './GameObject';

export default class ExplodingObject extends GameObject {
  constructor(scene, x, y, arrExplodeSprites) {
    super(scene, x, y, 'exploding-sprite');
    this._createAnimationExplode(arrExplodeSprites);
  }

  _createAnimationExplode(arrExplodeSprites) {
    this.scene.anims.create({
      key: 'explode',
      frames: [...arrExplodeSprites],
      frameRate: 30,
      repeat: 0,
    });
  }
}
