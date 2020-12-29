const jsonLoader = require('../components/jsonLoader');


let json;
let rows;
let cells
beforeEach(() => {
  json =  jsonLoader.getJson();
  rows = jsonLoader.getMatrixRows(json);
  cells = rows.reduce((result, item) => {
    result.push(...jsonLoader.getMatrixRows(item));
    return result;
  }, []);
});

test('it should be defined', () => {
  expect(json).toBeDefined();
});

test('it should be object', () => {
  expect(json).toBeInstanceOf(Object);
});

test('it should be a rectangular matrix', () => {
  expect(jsonLoader.isValidMatrix(json)).toBe(true);
});

test('it should has an isEmpty property in every cell', () => {
  const cell = {
    isEmpty: expect.stringMatching(/true|false/),
  };
  const testCells = Array(cells.length).fill(cell);
  expect(cells).toMatchObject(testCells);
});



// const temp = jsonLoader.getMatrixRows(jsonLoader.getJson());
// const arr = temp.reduce((result, item) => {
//   const temp = jsonLoader.getMatrixRows(item);
//   result.push(...temp);
//   return result;
// }, []);


// console.log(temp);
// console.log(arr); 