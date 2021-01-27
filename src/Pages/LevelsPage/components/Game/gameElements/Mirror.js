import GameObject from './GameObject';
import GameObjectFabric from './GameObjectFabric';
import SIZES from '../constants/SIZES';

export default class Mirror extends GameObject {
  constructor(scene, x = 0, y = 0, texture = 'char', isSetupOnField) {
    super(scene, x, y, texture, isSetupOnField);
    const mirrorUpType = this.texture.replace('down', 'up');
    this.mirrorUp = new GameObjectFabric(scene, x, y - SIZES.blocksInTile, mirrorUpType);
  }

  explode() {
    this.scene.removeCollideObject(this);
    this.scene.refreshLasers();
    this.mirrorUp.destroy();
    this.destroy();
  }
}
