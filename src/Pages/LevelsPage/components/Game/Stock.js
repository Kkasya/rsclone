export default class Stock {
  constructor() {
    this.arr = [];
  }

  add(item) {
    this.arr.push(item);
  }

  remove(item) {
    item.gameObject.destroy();
    this.arr = this.arr.filter((obj) => item !== obj);
  }
}
