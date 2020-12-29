import json from '../json/matrix.json';

/* return an pure json */
function getJson() {
  return json;
};

/* check that the json has the rectangular matrix */
function isValidMatrix(json) {
  return Object.keys(json)
    .map((row) => Object.keys(json[row]).length)
    .every((item, _, array) => item === array[0]);
};

/* return an array of the json properties */
function getMatrixRows(json) {
  return Object.keys(json)
    .reduce((result, row) => {
      result.push(json[row]);
      return result;
    }, []);
}

module.exports = {
  getJson,
  isValidMatrix,
  getMatrixRows
};
