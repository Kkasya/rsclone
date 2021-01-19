import GameObject from './GameObject';
import SIZES from './constants/SIZES';

export default class ActiveItem {
  constructor(scene) {
    this.scene = scene;
  }

  init() {
    this.type = '';
    this.index = 0;
    this.image = new GameObject(this.scene, -SIZES.cursorImageOffset, -SIZES.cursorImageOffset, '');
  }

  reset() {
    [this.type, this.index] = ['', 0];
    this.image.setPosition(-SIZES.cursorImageOffset, -SIZES.cursorImageOffset);
  }

  setItem(type, index) {
    [this.type, this.index] = [type, index];
    this.image.setTexture(type);
  }
}
