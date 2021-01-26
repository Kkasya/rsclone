export default class Stock {
  constructor(scene) {
    this.scene = scene;
    this.slots = [];
    this.itemsCounter = 0;
  }

  addEmptySlot(slotObj) {
    this.slots.push(slotObj);
  }

  defineLimit() {
    this.limit = this.slots.length;
  }

  get isEnoughPlace() {
    return this.itemsCounter < this.limit;
  }

  addItem(itemType) {
    const firstEmptyCell = this.slots.findIndex((item) => {
      return (item.texture === 'emptySlot' || item.texture?.key === 'emptySlot');
    });

    this.slots[firstEmptyCell]
      .setTexture(itemType)
      .setInteractive({ cursor: 'pointer' });
    this._addListener(this.slots[firstEmptyCell], firstEmptyCell);
    this.itemsCounter++;
  }

  _addListener(item, index) {
    item.on('pointerdown', () => {
      this.scene.activeItem.setItem(item.texture, index);
    });
  }

  removeActiveItem() {
    const index = this.scene.activeItem.index;
    this.slots[index]
      .setTexture('emptySlot')
      .removeInteractive();
    this.itemsCounter--;
  }
}
