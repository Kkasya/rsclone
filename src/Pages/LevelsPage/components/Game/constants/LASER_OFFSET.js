import SIZES from './SIZES';

const LASER_OFFSET = {
  right: {
    mainAxis: 'x',
    increment: SIZES.tileSize,
  },

  left: {
    mainAxis: 'x',
    increment: -SIZES.tileSize,
  },

  top: {
    mainAxis: 'y',
    increment: -SIZES.tileSize,
  },

  bottom: {
    mainAxis: 'y',
    increment: SIZES.tileSize,
  },
}

export default LASER_OFFSET;
