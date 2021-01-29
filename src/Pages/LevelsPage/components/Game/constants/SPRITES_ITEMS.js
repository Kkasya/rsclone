const SPRITES_ITEMS = [
  {
    type: 'tiles',
  },
  {
    type: 'rock-up',
  },
  {
    type: 'rayHor',
    action: 'heatByLaser',
  },
  {
    type: 'rayVert',
    action: 'heatByLaser',
  },
  {
    type: 'ray-angle-from-left',
  },
  {
    type: 'ray-angle-from-right',
  },
  {
    type: 'ray-short-left',
  },
  {
    type: 'ray-short-right',
  },
  {
    type: 'menu',
  },
  {
    type: 'move',
  },
  {
    type: 'restartButton',
  },
  {
    type: 'emptySlot',
  },
  {
    type: 'kids',
    action: 'winRound',
  },
  {
    type: 'bomb',
  },
  {
    type: 'stock-bomb',
    action: 'pickItem',
    isActionToChar: false,
  },
  {
    type: 'fire',
    action: 'heatByFire',
  },
  {
    type: 'mirror-down-left',
  },
  {
    type: 'mirror-down-right',
  },
  {
    type: 'mirror-up-left',
  },
  {
    type: 'mirror-up-right',
  },
  {
    type: 'stock-mirror-down-left',
    action: 'pickItem',
    isActionToChar: false,
  },
  {
    type: 'stock-mirror-down-right',
    action: 'pickItem',
    isActionToChar: false,
  },
  {
    type: 'pail',
    action: 'pickItem',
    isActionToChar: true,
  },
  {
    type: 'torch',
    action: 'pickItem',
    isActionToChar: true,
  },
  {
    type: 'hammer',
    action: 'pickItem',
    isActionToChar: false,
  },
  {
    type: 'water',
    action: 'freeze',
  },
  {
    type: 'wrench-left',
    action: 'pickItem',
    isActionToChar: false,
  },
  {
    type: 'wrench-right',
    action: 'pickItem',
    isActionToChar: false,
  },
  {
    type: 'laser-top',
  },
  {
    type: 'laser-right',
  },
  {
    type: 'laser-bottom',
  },
  {
    type: 'laser-left',
  },
  {
    type: 'stock-laser-top',
    action: 'pickItem',
    isActionToChar: false,
  },
  {
    type: 'stock-laser-right',
    action: 'pickItem',
    isActionToChar: false,
  },
  {
    type: 'stock-laser-bottom',
    action: 'pickItem',
    isActionToChar: false,
  },
  {
    type: 'stock-laser-left',
    action: 'pickItem',
    isActionToChar: false,
  },
];

export default SPRITES_ITEMS;
