import SIZES from './SIZES';

export const LASER_OFFSET = {
  top: {
    x: 20,
    y: -3,
    mainAxis: 'y',
    isIncrease: false,
  },

  right: {
    x: 42,
    y: 11,
    mainAxis: 'x',
    isIncrease: true,
  },

  bottom: {
    x: 20,
    y: 35,
    mainAxis: 'y',
    isIncrease: true,
  },

  left: {
    x: -2,
    y: 11,
    mainAxis: 'x',
    isIncrease: false,
  },
}

export const LASER_OFFSET2 = {
  right: SIZES.tileSize,
  left: -SIZES.tileSize,
  top: -SIZES.tileSize,
  bottom: SIZES.tileSize,
}
