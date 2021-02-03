import SPRITES_ITEMS from '../constants/SPRITES_ITEMS';

export default class ActionsReducer {
  defineAction(textureKey) {
    const item = SPRITES_ITEMS.find((el) => el.type === textureKey);
    return item.action;
  }
}
