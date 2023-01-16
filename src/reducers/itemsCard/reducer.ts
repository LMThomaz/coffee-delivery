import produce from 'immer'
import { ActionTypes } from './actions'

export interface ItemsCart {
  id: number
  quantity: number
}

interface ItemsCartState {
  itemsCart: ItemsCart[]
}

export function itemsCartReducer(state: ItemsCartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_ITEM_CART:
      return produce(state, (draft) => {
        const { newItemCart } = action.payload

        const indexItemInState = draft.itemsCart.findIndex(
          (item) => item.id === newItemCart.id,
        )
        const hasItemInSate = indexItemInState >= 0

        if (hasItemInSate) {
          const alreadyExistItem = draft.itemsCart[indexItemInState]
          console.log(alreadyExistItem)

          draft.itemsCart[indexItemInState] = {
            id: alreadyExistItem.id,
            quantity: alreadyExistItem.quantity + newItemCart.quantity,
          }
        } else {
          draft.itemsCart.push(newItemCart)
        }
      })
    case ActionTypes.REMOVE_ITEM_CART:
      return produce(state, (draft) => {
        const { idToRemove } = action.payload

        const indexItemInState = draft.itemsCart.findIndex(
          (item) => item.id === idToRemove,
        )
        const hasItemInSate = indexItemInState >= 0
        if (!hasItemInSate) return draft

        draft.itemsCart.splice(indexItemInState, 1)
      })
    default:
      return state
  }
}
