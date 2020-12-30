const startCell = {
  y: 1,
  x: 2,
  d: 0,
};

const finishCell = {
  y: 4,
  x: 4,
  d: -1,
};

const emptyCell = {y: 0, x: 0, d: -1};

const size = 5;
const playingArea = Array(size * size).fill(emptyCell).map((_, index) => {
  const result = {
    y: Math.floor(index / size),
    x: index % size, 
    d: -1,
  }
  return result;
});

function setStartCell(startCell, playingArea) {
  const {y, x, d} = startCell;
  getCell(y, x, playingArea).d = d;
  return playingArea;
};

function predicate(y, x, cell) {
  return (y === cell.y && x === cell.x);
};

function getCell(y, x, playingArea) {
  return playingArea.find((cell) => predicate(y, x, cell));
};

function getNeighborhood(cell, playingArea) {
  const result = [];
  const {y, x} = cell;

  result.push(getCell(y, x + 1, playingArea));
  result.push(getCell(y, x - 1, playingArea));
  result.push(getCell(y + 1, x, playingArea));
  result.push(getCell(y - 1, x, playingArea));
  result.push(getCell(y + 1, x + 1, playingArea));
  result.push(getCell(y + 1, x - 1, playingArea));
  result.push(getCell(y - 1, x + 1, playingArea));
  result.push(getCell(y - 1, x - 1, playingArea));

  return result.filter((item) => item !== undefined);
};

function setDistance(cell, playingArea) {
  const neighborhood = getNeighborhood(cell, playingArea) ?? [];
  neighborhood.forEach((item) => {
    if (item.d === -1) {
      item.d = cell.d + 1;
    }
  });
  return neighborhood.length;
};

function getAvailableCellsForStep(cell, playingArea, stepsCounter) {
  return getNeighborhood(cell, playingArea).filter((item) => item.d === stepsCounter);
};

function getClosestCell(cell, playingArea) {
  return getAvailableCellsForStep(cell, playingArea, cell.d - 1)[0];
};

function isFinish(cell, playingArea) {
  const {y, x} = cell;
  const temp = getCell(y, x, playingArea);
  return temp.d !== -1;
};

function isStart(cell, playingArea) {
  const {y, x} = cell;
  const temp = getCell(y, x, playingArea);
  return temp.d === 0;
};

function getCellsForNextWave(cell, playingArea) {
  const set = new Set();
  const neighborhood = getNeighborhood(cell, playingArea);
  neighborhood.forEach((item) => {
    const availableNeighborhood = getAvailableCellsForStep(item, playingArea, -1);
    if (availableNeighborhood.length !== 0){
      set.add(item);
    };
  });
  return Array.from(set);
};

function appendArray(first, second){
  second = [].concat(second);
  second.forEach((item) => first[first.length] = item);
  return first;
};

function wavePropagation(startCell, finishCell, playingArea) {
  let wave = [startCell];
  do {
    const temp = wave.reduce((result, cell) => {
      if (setDistance(cell, playingArea)) {
        result = appendArray(result, getCellsForNextWave(cell, playingArea));
      }
      return result;
    }, []);

    wave = Array.from(new Set(temp));
  }
  while (!isFinish(finishCell, playingArea) && wave.length)

  return getCell(finishCell.y, finishCell.x, playingArea);
};

function pathFinder(finishCell, playingArea) {
  const path = [finishCell];
  let currentCell = finishCell;

  do {
    currentCell = getClosestCell(currentCell, playingArea);
    if (currentCell) {
      path[path.length] = currentCell;
    };
  } while(currentCell && !isStart(currentCell, playingArea))

  return path;
}

module.exports = {
  playingArea,
  setStartCell,
  getCell,
  getNeighborhood,
  setDistance,
  isFinish,
  isStart,
  getAvailableCellsForStep,
  getCellsForNextWave,
  wavePropagation,
  appendArray,
  getClosestCell,
  pathFinder
};