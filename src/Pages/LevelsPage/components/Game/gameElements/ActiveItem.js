import Phaser from 'phaser';
import SIZES from '../constants/SIZES';
import visibilityPriority from '../utils/visibilityPriority';

export default class ActiveItem {
  constructor(scene) {
    this.scene = scene;
  }

  init() {
    this.type = '';
    this.index = 0;
    this.image = new ActiveItemImage(this.scene, -SIZES.cursorImageOffset, -SIZES.cursorImageOffset, '');
  }

  reset() {
    [this.type, this.index] = ['', 0];
    this.image.setPosition(-SIZES.cursorImageOffset, -SIZES.cursorImageOffset);
  }

  setItem(type, index, isSetupOnField) {
    [this.type, this.index] = [type, index];
    this.image.setTexture(type);
    this.isSetupOnField = isSetupOnField;
  }
}

class ActiveItemImage extends Phaser.Physics.Arcade.Sprite {
  constructor(...props) {
    super(...props);
    this.scene.add.existing(this);
    this.setDepth(visibilityPriority('activeItem'));
  }
}
