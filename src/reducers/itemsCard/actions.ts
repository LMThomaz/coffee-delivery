import { ItemsCart } from './reducer'

export enum ActionTypes {
  ADD_NEW_ITEM_CART = 'ADD_NEW_ITEM_CART',
  REMOVE_ITEM_CART = 'REMOVE_ITEM_CART',
}

export function addItemCart(newItemCart: ItemsCart) {
  return {
    type: ActionTypes.ADD_NEW_ITEM_CART,
    payload: {
      newItemCart,
    },
  }
}

export function removeItemCart(idToRemove: number) {
  return {
    type: ActionTypes.REMOVE_ITEM_CART,
    payload: {
      idToRemove,
    },
  }
}
