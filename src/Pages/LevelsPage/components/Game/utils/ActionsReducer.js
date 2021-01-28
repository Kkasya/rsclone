import ITEMS from '../constants/ITEMS';

export default class ActionsReducer {
  defineAction(textureKey) {
    const item = ITEMS.find((el) => el.type === textureKey);
    return item.action;
  }
}
