const TILES_SIZES = {
  tileSize: 40,
  fieldWidth: 10,
  fieldHeight: 16,
  blocksInTile: 4,
  unacceptableId: 256,

  get widthInPixels() {
    return this.tileSize * this.fieldWidth;
  },
  get heightInPixels() {
    return this.tileSize * this.fieldHeight;
  },
  duration: 200,
};

export default TILES_SIZES;
