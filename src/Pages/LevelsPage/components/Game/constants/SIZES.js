const SIZES = {
  tileSize: 40,
  fieldWidth: 17,
  fieldHeight: 14,
  blocksInTile: 4,
  controlPanelHeight: 100,

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

  hitboxes: {
    small: 3,
    big: 19,
  },

  offsetsForBigHitbox: {
    x: 12,
    y: 8,
  }
};

export default SIZES;
