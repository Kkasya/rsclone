import EasyStar from 'easystarjs';
import SIZES from '../constants/SIZES';
import DIFFERENT_CONSTANTS from '../constants/DIFFERENT_CONSTANTS';

export default class Pathfinder {
  constructor(scene) {
    this.scene = scene;
    this.finder = new EasyStar.js();
  }

  createPath(pointer) {
    const toX = Math.floor(pointer.x / SIZES.tileSize);
    const toY = Math.floor(pointer.y / SIZES.tileSize);
    const fromX = Math.floor(this.scene.char.x / SIZES.tileSize);
    const fromY = Math.floor(this.scene.char.y / SIZES.tileSize);

    if (!(fromX === toX && fromY === toY)) {
      this._defineAllAndAcceptableTiles();
      this._calculatePath(fromX, fromY, toX, toY);
    }
  }

  _defineAllAndAcceptableTiles() {
    const allTiles = [];
    const acceptableTiles = [];
    const properties = this.scene.map.tilesets[0].tileProperties;

    for (let y = 0; y < this.scene.map.height; y += SIZES.blocksInTile) {
      const col = [];
      for (let x = 0; x < this.scene.map.width; x += SIZES.blocksInTile) {
        const id = this._getTileID(x, y);
        if (!properties[id - 1] || !properties[id - 1].isCollied) {
          acceptableTiles.push(id);
        }
        col.push(id);
      }
      allTiles.push(col);
    }

    this.finder.setGrid(allTiles);
    this.finder.setAcceptableTiles(acceptableTiles);
  }

  _getTileID(x, y) {
    return this._getIdFromObjectsLayer(x, y) || this._getIdFromFloorLayer(x, y);
  }

  _getIdFromObjectsLayer(x, y) {
    for (let i = 0; i < this.scene.collideObjects.length; i++) {
      if ((this.scene.collideObjects[i].x - SIZES.halfForOffset) / SIZES.tileSizeInPixels === x
      && (this.scene.collideObjects[i].y - SIZES.halfForOffset) / SIZES.tileSizeInPixels === y) {
        return DIFFERENT_CONSTANTS.unacceptableId;
      }
    }
  }

  _getIdFromFloorLayer(x, y) {
    const tile = this.scene.map.getTileAt(x, y);
    return tile?.index;
  }

  _calculatePath(fromX, fromY, toX, toY) {
    this.finder.findPath(fromX, fromY, toX, toY, (path) => {
      if (path) {
        this.scene.moveCharacter(path);
      }
    });
    this.finder.calculate();
  }
}
