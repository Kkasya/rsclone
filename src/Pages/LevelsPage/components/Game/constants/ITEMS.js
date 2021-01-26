const ITEMS = [
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
    type: 'emptySlot',
  },
  {
    type: 'char',
  },
  {
    type: 'kids',
    action: 'winRound',
  },
  {
    type: 'bomb',
  },
  {
    type: 'fire',
    action: 'heatByFire',
  },
  {
    type: 'mirror-double-left-left',
  },
  {
    type: 'mirror-double-left-right',
  },
  {
    type: 'mirror-double-right-left',
  },
  {
    type: 'mirror-double-right-right',
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
    type: 'mirror-stock-left',
    action: 'pickItem',
    isActionToChar: false,
  },
  {
    type: 'mirror-stock-right',
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
];

export default ITEMS;
