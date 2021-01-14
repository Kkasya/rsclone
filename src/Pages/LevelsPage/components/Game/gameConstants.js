const gameConstants = {
  tileSize: 40,
  fieldSize: 10,
  get sizeInPixels() {
    return this.tileSize * this.fieldSize;
  }
};

export default gameConstants;
