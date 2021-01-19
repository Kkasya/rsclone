const ITEMS = [
  {
    type: 'tiles',
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
];

export default ITEMS;
