import GameObject from './GameObject';
import SIZES from '../constants/SIZES';
import DIFFERENT_CONSTANTS from '../constants/DIFFERENT_CONSTANTS';
import visibilityPriority from '../utils/visibilityPriority';

export default class Char extends GameObject {
  constructor(...props) {
    super(...props);
    this.setCollideWorldBounds(true);
    this.setDepth(visibilityPriority('char'));

    this.isFreeze = false;
    this.isWet = false;
    this.isFlying = false;
    this.toFlyingPositions = [0.5, 0.6, 0.7, 0.8];
    this._addListener();
    this._createBurnedAnimation();
  }

  _defineHitbox() {
    this.body.setSize(SIZES.hitboxes.big, SIZES.hitboxes.big, false);
    this.body.setOffset(SIZES.offsetsForBigHitbox.x, SIZES.offsetsForBigHitbox.y);
  }

  _addListener() {
    this.on('pointerdown', (pointer) => {
      const actionType = this.scene.activeItem.image.texture.key;
      if (pointer.primaryDown && actionType) {
        if (actionType === 'pail' || actionType === 'torch') {
          if (actionType === 'pail') {
            this.addPail();
          }
          else {
            this.addHeatByTorch();
          }
          this.scene.stock.removeActiveItem();
        }
        this.scene.activeItem.reset();
      }
    });
  }

  move(path) {
    const tweens = [];
    for (let i = 0; i < path.length - 1; i++) {
      const cellX = path[i + 1].x * SIZES.blocksInTile;
      const cellY = path[i + 1].y * SIZES.blocksInTile;

      tweens.push({
        targets: this,
        x: {
          value: cellX * this.scene.map.tileWidth + SIZES.halfForOffset,
          duration: DIFFERENT_CONSTANTS.duration,
        },
        y: {
          value: cellY * this.scene.map.tileHeight + SIZES.halfForOffset,
          duration: DIFFERENT_CONSTANTS.duration,
        },
      });

      const fieldType = this.scene.map.layers[2].data[cellY][cellX].properties.type;
      if (fieldType === 'water' || fieldType === 'fire') {
        break;
      }
    }

    this.way = this.scene.tweens.timeline({
      tweens: tweens,
    });
  };

  stopMoving() {
    this.scene.isGameOver = true;
  }

  isInCenterOfTile() {
    const x = this.x - SIZES.halfForOffset;
    const y = this.y - SIZES.halfForOffset;
    const inCenterByX = x % SIZES.tileSize <= 9;
    const inCenterByY = y % SIZES.tileSize <= 9;
    return (inCenterByX && inCenterByY);
  }

  isNearTileBoundaries() {
    const remainderX = this.x % SIZES.tileSize;
    const remainderY = (this.y + 4) % SIZES.tileSize;
    return (remainderX <= 3 || remainderX >= 37 || remainderY <= 3 || remainderY >= 37);
  }

  addFreeze() {
    if (!this.isFlying) {
      this.isFreeze = true;
      this.scene.isReadyToToggleCollide = true;
      this._setTexture('freeze');
    }
  }

  addPail() {
    if (!this.isFreeze) {
      this.isFlying = false;
      this.isWet = true;

      if (this.texture.key === 'char-flying') {
        this.scene.isCollideAccept = false;
        this.scene.isReadyToToggleCollide = true;
      }
      this._setTexture('wet');
    }
  }

  addHeatByTorch() {
    if (this.isFreeze) {
      this.isFreeze = false;
      this.isWet = true;
      this._setTexture('wet');
    }
    else if (this.isWet) {
      this.isWet = false;
      this._setTexture('normal');
    }
  }

  addHeatByLaser() {
    if (this.isWet) {
      this.scene.isReadyToToggleCollide = true;
      this.isWet = false;
      this._setTexture('normal');
    }
    else {
      this.die();
    }
  }

  addHeatByFire() {
    if (this.isWet) {
      this.isWet = false;
      this._setTexture('normal');
    }
    else {
      this.isFlying = true;
      this._setTexture('flying');
    }
    this.scene.isReadyToToggleCollide = true;
  }

  _setTexture(state) {
    if (this.texture.key === 'char-flying') {
      clearInterval(this.intervalToLevitate);
      this._addFlyingAnimation('down');
    }

    this.setTexture(`char-${state}`);
    if (state === 'flying') {
      this._addFlyingAnimation('up');
    }
  }

  _addFlyingAnimation(upOrDown) {
    const arr = [...this.toFlyingPositions];
    if (upOrDown === 'down') {
      arr.reverse();
    }

    let count = 0;
    this.intervalToFlying = setInterval(() => {
      this.setOrigin(0.5, arr[count]);
      count++;
      if (count >= arr.length) {
        clearInterval(this.intervalToFlying);
        if (upOrDown === 'up') {
          this._addLevitateAnimation();
        }
      }
    }, 100);
  }

  _addLevitateAnimation() {
    let count = 0;
    this.intervalToLevitate = setInterval(() => {
      count & 1
        ? this.setOrigin(0.5, 0.8)
        : this.setOrigin(0.5, 0.85);
      count++;
    }, 400);
  }

  die() {
    if (!this.scene.isGameOver) {
      this.scene.isGameOver = true;
      this.stopMoving();
      setTimeout(() => {
        this.setOrigin(0.5, 0.7);
        this.play('burned');
        this.scene.game.audioplayer.play('death');
        setTimeout(() => {
          this.scene.scene.start('Death');
        }, 5000);
      }, DIFFERENT_CONSTANTS.explodeDelay);
    }
  }

  _createBurnedAnimation() {
    this.arrCharBurnedArr = [
      {
        key: 'char-burned1',
        duration: 800,
      },
      {
        key: 'char-burned2',
        duration: 80,
      },
      {
        key: 'char-burned3',
        duration: 80,
      },
      {
        key: 'char-burned4',
        duration: 80,
      },
      {
        key: 'char-burned5',
        duration: 80,
      },
      {
        key: 'char-burned6',
        duration: 800,
      },
      {
        key: 'char-burned7',
        duration: 40,
      },
      {
        key: 'char-burned6',
        duration: 8000,
      },
    ];

    this.scene.anims.create({
      key: 'burned',
      frames: [...this.arrCharBurnedArr],
      frameRate: 30,
      repeat: 0,
    });
  }
}
