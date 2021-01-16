import ITEMS from '../constants/ITEMS';

export default class ActionsReducer {
  defineAction(type) {
    const item = ITEMS.find((el) => el.type === type);
    return item.action;
  }
}
