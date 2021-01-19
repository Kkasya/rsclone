export default class Stock {
  constructor(scene) {
    this.scene = scene;
    this.arr = [];
    this.emptySlots = [];
    this.count = 0;
  }

  addEmptySlot(slotObj) {
    this.emptySlots.push(slotObj);
  }

  defineLimit() {
    this.limit = this.emptySlots.length;
  }

  isEnoughPlace() {
    return this.arr.length < this.limit;
  }

  addItem(item) {
    this.count++;
    this.arr.push(item);
    this.emptySlots[this.arr.length - 1].type = item.type;
    this.emptySlots[this.arr.length - 1].gameObject.setTexture(item.type);

    this._setInteractive(this.emptySlots[this.arr.length - 1], this.arr.length - 1);
  }

  _setInteractive(item, index) {
    item.gameObject.setInteractive().on('pointerdown', (pointer, localX, localY, event) => {
      const activeItem = {
        type: item.type,
        index: index,
      };
      this.scene.setActiveItem(activeItem);
      this.scene.cursorImage.setTexture(item.type);
    });
  }

  remove(item) {
    this.count--;
    item.gameObject.destroy();
    this.arr = this.arr.filter((obj) => item !== obj);
  }
}
