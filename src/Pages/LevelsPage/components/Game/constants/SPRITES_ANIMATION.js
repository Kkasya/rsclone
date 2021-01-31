const bombExplodeSpritesQuantity = 5;
export const bombExplodeArr = Array(bombExplodeSpritesQuantity)
  .fill(0)
  .map((item, index) => `bomb-explode${index + 1}`);

const SPRITES_ANIMATION = [
  'kid-blue',
  'kid-pink',
  'kid-yellow',
  'bomb-detonate1',
  'bomb-detonate2',
  'exploding-sprite',
  ...bombExplodeArr,
];

export default SPRITES_ANIMATION;
