const directions = [
  'right',
  'left',
  'top',
  'bottom',
];

export default function mirrorsReflection(mirrorType, raysDirection) {
  if (mirrorType === 'right') {
    return directions[(directions.indexOf(raysDirection) + 2) % directions.length];
  }
  if (mirrorType === 'left') {
    return directions[directions.length - 1 - directions.indexOf(raysDirection)];
  }
}
