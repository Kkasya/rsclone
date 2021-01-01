const Core = require('../../components/core/tracker');

function Cell(y, x, d) {
  if (!new.target) { 
    return new Cell(y, x, d); 
  }

  this.y = y;
  this.x = x;
  this.d = d;
}

function getPlayingArea(size) {
  const emptyCell = Cell(0, 0, -1); 
  const playingArea = Array(size * size).fill(emptyCell)
    .map((_, index) => {
      return Cell(
        Math.floor(index / size),
        index % size,
        -1
      );
    });
  return playingArea;
};

let tracker;

beforeEach(() => {
  tracker = new Core.Tracker();
});

test('_getCell should return a cell with the specified coordinates', () => {
  const playingArea = getPlayingArea(3);
  const y = 1, x = 1;
  const cell = tracker._getCell(y, x, playingArea);

  expect(cell).toEqual({ y: 1, x: 1, d: -1 });
});

describe('changes distance property and check this property', () => {
  let playingArea;
  let startCell;

  beforeAll(() => {
    playingArea = getPlayingArea(2);
    startCell = Cell(0, 1, 0);
  });

  test('_markStartCell should change distance property of the start cell in playing area', () => {
    const expected =  [
      { y: 0, x: 0, d: -1 },
      { y: 0, x: 1, d: 0 },
      { y: 1, x: 0, d: -1 },
      { y: 1, x: 1, d: -1 }
    ];
    playingArea = tracker._markStartCell(startCell, playingArea);

    expect(playingArea).toEqual(expect.arrayContaining(expected));
  });  

  test('_markStartCell should check distance property of the current cell in playing area', () => {
    const currentCell = startCell;
    const isMarked = tracker._checkCell(currentCell, playingArea, 0);
    expect(isMarked).toEqual(true);
  });

});

test('_getEightClosestCells should return eight closest cells of the current cell', () => {
  const expected = [
    { y: 2, x: 2, d: -1 },
    { y: 2, x: 0, d: -1 },
    { y: 3, x: 1, d: -1 },
    { y: 1, x: 1, d: -1 },
    { y: 3, x: 2, d: -1 },
    { y: 3, x: 0, d: -1 },
    { y: 1, x: 2, d: -1 },
    { y: 1, x: 0, d: -1 }
  ];
  const playingArea = getPlayingArea(4);
  const currentCell = Cell(2, 1, 0);
  const closestCells = tracker._getEightClosestCells(currentCell, playingArea);

  expect(closestCells).toEqual(expect.arrayContaining(expected));
});

test('_getEightClosestCells should return less than 8 closest cells if current cell on the age',
  () => {
  const expected = [
    { y: 2, x: 1, d: -1 },
    { y: 3, x: 0, d: -1 },
    { y: 1, x: 0, d: -1 },
    { y: 3, x: 1, d: -1 },
    { y: 1, x: 1, d: -1 }
  ];
  const playingArea = getPlayingArea(4);
  const currentCell = Cell(2, 0, 0);
  const closestCells = tracker._getEightClosestCells(currentCell, playingArea);

  expect(closestCells).toEqual(expect.arrayContaining(expected));
});

test('_markAdjacentCells should mark all adjacent cell', () => {
  const playingArea = getPlayingArea(4);
  const currentCell = Cell(1, 1, 0);
  const countMarkedCells = tracker._markAdjacentCells(currentCell, playingArea);

  expect(countMarkedCells).toEqual(8);
});

test('_getAvailableCells should return cells with a current distance property', () => {
  const expected = [
    { y: 1, x: 2, d: 1 },
    { y: 1, x: 0, d: 1 },
    { y: 2, x: 1, d: 1 },
    { y: 0, x: 1, d: 1 },
    { y: 2, x: 2, d: 1 },
    { y: 2, x: 0, d: 1 },
    { y: 0, x: 2, d: 1 },
    { y: 0, x: 0, d: 1 }
  ];
  const playingArea = getPlayingArea(3);
  const distance = 0;
  const currentCell = Cell(1, 1, distance);
  tracker._markAdjacentCells(currentCell, playingArea);

  const availableCells = tracker._getAvailableCells(currentCell, playingArea, distance + 1);
  expect(availableCells).toEqual(expect.arrayContaining(expected));
});

test('_getCellForComeBack should return one cell with a distance property of one less than current',
  () => {
  let playingArea = getPlayingArea(3);
  const startCell = Cell(1, 1, 0);
  playingArea = tracker._markStartCell(startCell, playingArea);
  tracker._markAdjacentCells(startCell, playingArea);
  const currentCell = Cell(2, 0, 1);

  const resultCell = tracker._getCellForComeBack(currentCell, playingArea);
  expect(resultCell).toEqual(startCell);
});

test('_getCellsForNextWave should return cells with a distance prop is equal -1', () => {
  const expected =  [
    { y: 1, x: 2, d: 1 },
    { y: 2, x: 1, d: 1 },
    { y: 2, x: 2, d: 1 },
    { y: 2, x: 0, d: 1 },
    { y: 0, x: 2, d: 1 }
  ];
  let playingArea = getPlayingArea(5);
  const startCell = Cell(1, 1, 0);
  playingArea = tracker._markStartCell(startCell, playingArea);
  tracker._markAdjacentCells(startCell, playingArea);

  const cellsForNextWave = tracker._getCellsForNextWave(startCell, playingArea);
  expect(cellsForNextWave).toEqual(expect.arrayContaining(expected));
});

describe('Spreads a wave and restore the path to start cell', () => {
  let playingArea;
  let startCell;
  let finishCell;

  beforeAll(() => {
    startCell = Cell(0, 1, 0);
    finishCell = Cell(3, 2, -1);
    playingArea = tracker._markStartCell(startCell, getPlayingArea(4));
  });

  test('_propagateWave should change a value of distance prop the all cells until to find finish',
    () => {
    finishCell = tracker._propagateWave(startCell, finishCell, playingArea);
    expect(finishCell).toEqual({y: 3, x: 2, d: 3});
  });

  test('_restorePath should return array of cells witch means the path from finish to start', () =>{
    const expected = [
      { y: 3, x: 2, d: 3 },
      { y: 2, x: 2, d: 2 },
      { y: 1, x: 2, d: 1 },
      { y: 0, x: 1, d: 0 }
    ];
    const path = tracker._restorePath(finishCell, playingArea);
    expect(path).toEqual(expect.arrayContaining(expected));
  });
});

test('Tracker should return correct path from start to finish', () => {
  const expected = [
    { y: 0, x: 2, d: 0 },
    { y: 1, x: 3, d: 1 },
    { y: 2, x: 3, d: 2 },
    { y: 3, x: 3, d: 3 },
    { y: 4, x: 3, d: 4 }
  ];  
  const playingArea = getPlayingArea(5);
  const startCell = Cell(0, 2, 0);
  const finishCell = Cell(4, 3, -1);

  const track = tracker.getTrack(startCell, finishCell, playingArea);

  expect(track).toEqual(expect.arrayContaining(expected));
});
