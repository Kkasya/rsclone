const VISIBILITY_PRIORITY = {
  'char': 2,
  'ray': 3,
  'ray-priority': 5,
  'exploding-sprite': 7,
  'rock-up': 8,
  'activeItem': 9,
};

export default function visibilityPriority(type) {
  if (type.startsWith('kid-')) {
    return 2;
  }
  if (type.startsWith('mirror-down')) {
    return 4;
  }
  if (type.startsWith('mirror-up')) {
    return 6;
  }
  return VISIBILITY_PRIORITY[type] || 1;
}
