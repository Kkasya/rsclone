const VISIBILITY_PRIORITY = {
  'char': 3,
  'ray': 4,
  'ray-priority': 6,
  'rock-up': 8,
  'exploding-sprite': 9,
  'activeItem': 10,
};

export default function visibilityPriority(type) {
  if (type.startsWith('kid-')) {
    return 2;
  }
  if (type.startsWith('mirror-down')) {
    return 5;
  }
  if (type.startsWith('mirror-up')) {
    return 7;
  }
  return VISIBILITY_PRIORITY[type] || 1;
}
