const Engine = require('../components/engine');

const _y = 1;
const _x = 2;
const _d = 0;
const startCell = {y: _y, x: _x, d: _d};

const finishCell = {y: 4, x: 4, d: -1};

test('it should be defined', () => {
  expect(Engine.playingArea).toBeDefined();
});

test('it should be defined', () => {
  Engine.playingArea = Engine.setStartCell(startCell, Engine.playingArea);
  expect(Engine.playingArea).toBeDefined();
});

test('it should be defined', () => {
  expect(Engine.getNeighborhood(startCell, Engine.playingArea)).toBeDefined();
})

test('it should be equal {y: 1, x: 2, d: -1}', () => {
  expect(Engine.getCell(_y, _x, Engine.playingArea)).toMatchObject({y: _y, x: _x, d: _d});
});

test('it should be false', () => {
  expect(Engine.isFinish(finishCell, Engine.playingArea)).toBe(false);
});

test('it should be true', () => {
  expect(Engine.isStart(startCell, Engine.playingArea)).toBe(true);
});

test('it should be defined', () => {
  expect(Engine.getAvailableCellsForStep(startCell, Engine.playingArea, -1)).toBeDefined();
});

test('it should be empty', () => {
  const testPlayingArea = JSON.parse(JSON.stringify(Engine.playingArea));
  
  expect(Engine.setDistance(startCell, testPlayingArea)).not.toBe(0);
  expect(Engine.getAvailableCellsForStep(startCell, testPlayingArea, -1)).toHaveLength(0);
});

test('it should be equal', () => {
  const first = [1, 2];
  const second = [3, 4];
  const result = [1, 2, 3, 4];
  expect(Engine.appendArray(first, second)).toEqual(result)
});

test('it should be defined', () => {
  const testPlayingArea = JSON.parse(JSON.stringify(Engine.playingArea));
  const result = Engine.wavePropagation(startCell, finishCell, testPlayingArea);

  expect(result).toBeDefined();
});

test('it should be defined', () => {
  const testPlayingArea = JSON.parse(JSON.stringify(Engine.playingArea));
  const finish = Engine.wavePropagation(startCell, finishCell, testPlayingArea);
  const result = Engine.getClosestCell(finish, testPlayingArea);

  expect(result).toBeDefined();
});

test('it should be empty', () => {
  const testPlayingArea = JSON.parse(JSON.stringify(Engine.playingArea));
  const finish = Engine.wavePropagation(startCell, finishCell, testPlayingArea);

  const path = Engine.pathFinder(startCell, testPlayingArea);

  expect(path).toEqual([startCell]);
});

test('it should be defined', () => {
  const testPlayingArea = JSON.parse(JSON.stringify(Engine.playingArea));
  const finish = Engine.wavePropagation(startCell, finishCell, testPlayingArea);
  const path = Engine.pathFinder(finish, testPlayingArea);

  console.log(path);
  expect(path).toBeDefined();
});
