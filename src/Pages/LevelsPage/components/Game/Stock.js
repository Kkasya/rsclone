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
    const firstEmptyCell = this.slots.findIndex((item) => (item.type === 'emptySlot'));
    this.slots[firstEmptyCell].type = itemType;
    this.slots[firstEmptyCell].gameObject.setTexture(itemType);
    this._addListener(this.slots[firstEmptyCell], firstEmptyCell);
    this.itemsCounter++;
  }

  _addListener(item, index) {
    item.gameObject.on('pointerdown', () => {
      this.scene.activeItem.setItem(item.type, index);
    });
  }

  removeActiveItem() {
    const index = this.scene.activeItem.index;
    this.slots[index].type = 'emptySlot';
    this.slots[index].gameObject.setTexture('emptySlot');
    this.slots[index].gameObject.removeInteractive();
    // this._moveEmptyToEnd(index);
    this.itemsCounter--;
  }
}
