const directions = [
  'top',
  'right',
  'bottom',
  'left',
];

export default function mirrorsWrench(currentDirection, isClockwise) {
  let newIndex = isClockwise
    ? directions.indexOf(currentDirection) + 1
    : directions.indexOf(currentDirection) - 1;
  if (newIndex === directions.length) {
    newIndex = 0;
  }
  else if (newIndex === -1) {
    newIndex = directions.length - 1;
  }

  return directions[newIndex];
}
