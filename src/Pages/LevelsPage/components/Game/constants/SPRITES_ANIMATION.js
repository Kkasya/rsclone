const bombExplodeSpritesQuantity = 5;
export const bombExplodeArr = Array(bombExplodeSpritesQuantity)
  .fill(0)
  .map((item, index) => `bomb-explode${index + 1}`);

const charBurnedSprites = 7;
const charBurnedArr = Array(charBurnedSprites)
  .fill(0)
  .map((item, index) => `char-burned${index + 1}`);

const lasersWithAnimation = [
  'right',
  'bottom',
  'left',
];
export const lasersSlidesQuantity = 2;
const arrLaserSprites = [];
lasersWithAnimation.forEach((direction) => {
  for (let i = 0; i < lasersSlidesQuantity; i++) {
    arrLaserSprites.push(`laser-${direction}-${i + 1}`);
  }
});

const SPRITES_ANIMATION = [
  'kid-blue',
  'kid-pink',
  'kid-yellow',
  'bomb-detonate1',
  'bomb-detonate2',
  'exploding-sprite',
  ...bombExplodeArr,
  ...charBurnedArr,
  ...arrLaserSprites,
];

export default SPRITES_ANIMATION;
