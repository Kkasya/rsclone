import GameObject from './GameObject';
import Bomb from './Bomb';
import Laser from './Laser';
import Mirror from './Mirror';

export default class GameObjectFabric {
  constructor(scene, x, y, texture, isSetupOnField) {
    if (texture === 'bomb') {
      return new Bomb(scene, x, y);
    }

    if (texture.startsWith('laser')) {
      return new Laser(scene, x, y, texture, isSetupOnField);
    }

    if (texture.startsWith('mirror-down')) {
      return new Mirror(scene, x, y, texture, isSetupOnField);
    }

    return new GameObject(scene, x, y, texture, isSetupOnField);
  }
}
