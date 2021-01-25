const VISIBILITY_PRIORITY = {
  'char': 2,
  'ray': 3,
  'rock-up': 4,
  'activeItem': 5,
};

export default function visibilityPriority(type) {
  if (type.includes('mirror-up')) {
    return 4;
  }

  return VISIBILITY_PRIORITY[type] || 1;
}
