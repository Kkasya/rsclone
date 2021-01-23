const SIZES = {
  tileSize: 40,
  fieldWidth: 14,
  fieldHeight: 12,
  blocksInTile: 4,
  unacceptableId: 588,

  get widthInPixels() {
    return this.tileSize * this.fieldWidth;
  },

  get heightInPixels() {
    return this.tileSize * this.fieldHeight;
  },

  get tileSizeInPixels() {
    return this.tileSize / this.blocksInTile;
  },

  get halfForOffset() {
    return this.tileSize / 2;
  },

  get cursorImageOffset() {
    return this.tileSize * (3 / 4);
  },

  duration: 300,

  hitboxes: {
    gameObjects: 2,
    char: 16,
  }
};

export default SIZES;
