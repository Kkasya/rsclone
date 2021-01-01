/**
 * Implements the Lee wave algorithm
 * Call getTrack() method
 */
class Tracker {
  /**
   * Returns a cell by its coordinates
   * 
   * @param {number} y 
   * @param {number} x 
   * @param {array} playingArea 
   * @returns {object} cell
   */
  _getCell(y, x, playingArea) {
    const predicate = (_y, _x, _cell) => (_y === _cell.y && _x === _cell.x);
    return playingArea.find((cell) => predicate(y, x, cell));
  }

  /**
   * Sets the value of the distance property of the start cell
   * 
   * @param {object} startCell 
   * @param {array} playingArea 
   * @returns {array} cells
   */
  _markStartCell(startCell, playingArea) {
    const {y, x, d} = startCell;
    this._getCell(y, x, playingArea).d = d;
    return playingArea;
  }

  /**
   * Check the value of distance property in the cell
   * 
   * @param {object} cell 
   * @param {array} playingArea 
   * @param {number} distance
   * @returns {boolean}
   */
  _checkCell(cell, playingArea, distance) {
    const {y, x} = cell;
    const temp = this._getCell(y, x, playingArea);
    return temp.d === distance;
  };

  /**
   * Returns the 8 closest cells around the current cell
   * 
   * @param {object} cell 
   * @param {array} playingArea
   * @returns {array} array of cells
   */
  _getEightClosestCells(cell, playingArea) {
    const result = [];
    const {y, x} = cell;
  
    result.push(this._getCell(y, x + 1, playingArea));
    result.push(this._getCell(y, x - 1, playingArea));
    result.push(this._getCell(y + 1, x, playingArea));
    result.push(this._getCell(y - 1, x, playingArea));
    result.push(this._getCell(y + 1, x + 1, playingArea));
    result.push(this._getCell(y + 1, x - 1, playingArea));
    result.push(this._getCell(y - 1, x + 1, playingArea));
    result.push(this._getCell(y - 1, x - 1, playingArea));
  
    return result.filter((item) => item !== undefined);
  }

  /**
   * Sets the value of distance property for adjacent cells for which it's not set
   * Returns count marked adjacent cells
   * 
   * @param {object} cell 
   * @param {array} playingArea 
   */
  _markAdjacentCells(cell, playingArea) {
    const neighborhood = this._getEightClosestCells(cell, playingArea) ?? [];
    neighborhood.forEach((item) => {
      if (item.d === -1) {
        item.d = cell.d + 1;
      }
    });
    return neighborhood.length;
  }

  /**
   * Check the all available cells witch have a value of distance property is equal to parameter
   * distance
   * 
   * @param {object} cell 
   * @param {array} playingArea 
   * @param {number} distance
   * @returns {array} array of cells
   */
  _getAvailableCells(cell, playingArea, distance) {
    return this._getEightClosestCells(cell, playingArea).filter((item) => item.d === distance);
  }

  /**
   * Returns the cell witch has a value of the distance property of one less than the current cell
   * 
   * @param {object} cell 
   * @param {array} playingArea 
   * @returns {object} cell
   */
  _getCellForComeBack(cell, playingArea) {
    return this._getAvailableCells(cell, playingArea, cell.d - 1)[0];
  };

  /**
   * Gets the closest cells witch has another the closest cells with a value of distance property is
   * equal -1.
   * Returns array of these cells
   * 
   * @example should return the all r cells
   *  1   1   r  -1  -1
   *  1   0   r  -1  -1
   *  r   r   r  -1  -1
   * -1  -1  -1  -1  -1
   * -1  -1  -1  -1  -1
   * 
   * @param {object} cell 
   * @param {array} playingArea 
   * @returns {array} cells
   */
  _getCellsForNextWave(cell, playingArea) {
    const set = new Set();
    const closestCells = this._getEightClosestCells(cell, playingArea);

    closestCells.forEach((item) => {
      const availableCells = this._getAvailableCells(item, playingArea, -1);
      if (availableCells.length !== 0){
        set.add(item);
      };
    });
    return Array.from(set);
  };

  /**
   * Spreads the wave from start cell to finish cell
   * Returns the finish cell with a new value of the distance property
   * 
   * @param {object} startCell 
   * @param {object} finishCell 
   * @param {array} playingArea 
   * @returns {object} cell
   */
  _propagateWave(startCell, finishCell, playingArea) {
    let wave = [startCell];
    const isNotFinish = this._checkCell.bind(this);

    while(isNotFinish(finishCell, playingArea, -1) && wave.length) {
      const temp = wave.reduce((result, cell) => {
        if (this._markAdjacentCells(cell, playingArea)) {
          result = appendArray(result, this._getCellsForNextWave(cell, playingArea));
        }
        return result;
      }, []);

      wave = Array.from(new Set(temp));
    }

    return this._getCell(finishCell.y, finishCell.x, playingArea);
  }

  /**
   * Restore path from the finish cell to the start cell
   * 
   * @param {object} finishCell
   * @param {array} playingArea
   * @returns {array} path
   */
  _restorePath(finishCell, playingArea) {
    const path = [finishCell];
    let currentCell = finishCell;
    const isStart = this._checkCell.bind(this);

    while(currentCell && (isStart(currentCell, playingArea, 0) === false)){
      currentCell = this._getCellForComeBack(currentCell, playingArea);
      if (currentCell) {
        path[path.length] = currentCell;
      };
    } 

    return path;
  }

  /**
   * Starts the pathfinding wave algorithm
   * Returns path from start cell to finish cell of the playing area
   * 
   * @param {object} startCell 
   * @param {object} finishCell 
   * @param {array} playingArea 
   * @returns {array} path
   */
  getTrack(startCell, finishCell, playingArea) {
    playingArea = this._markStartCell(startCell, playingArea);
    const _finishCell = this._propagateWave(startCell, finishCell, playingArea);
    return this._restorePath(_finishCell, playingArea).reverse();
  }
};

/**
 * Helpers function
 * Concatenates two array
 * 
 * @param {array} first 
 * @param {array} second 
 * @returns {array}
 */
function appendArray(first, second){
  second = [].concat(second);
  second.forEach((item) => first[first.length] = item);
  return first;
};

module.exports = {
  Tracker
};
