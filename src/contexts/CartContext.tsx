import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from 'react'
import { addItemCart } from '../reducers/itemsCard/actions'
import { ItemsCart, itemsCartReducer } from '../reducers/itemsCard/reducer'

interface AddNewItemCart {
  id: number
  quantity: number
}

interface CartContextType {
  itemsCart: ItemsCart[]
  quantityItemsInCart: number
  addNewItemCart: (data: AddNewItemCart) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

const tokenStorageItemsCard = '@coffee-delivery:items-card-1.0.0'

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [itemsState, dispatch] = useReducer(itemsCartReducer, undefined, () => {
    const storedStateAsJson = localStorage.getItem(tokenStorageItemsCard)
    if (storedStateAsJson) {
      return JSON.parse(storedStateAsJson)
    } else {
      return {
        itemsCart: [] as ItemsCart[],
      }
    }
  })

  useEffect(() => {
    console.log(itemsState)
    const stateJSON = JSON.stringify(itemsState)
    localStorage.setItem(tokenStorageItemsCard, stateJSON)
  }, [itemsState])

  const { itemsCart } = itemsState
  const quantityItemsInCart = itemsCart.reduce(
    (acc, cur) => acc + cur.quantity,
    0,
  )

  function addNewItemCart(data: AddNewItemCart) {
    const newItemCard: ItemsCart = {
      ...data,
    }
    dispatch(addItemCart(newItemCard))
  }

  return (
    <CartContext.Provider
      value={{ itemsCart, addNewItemCart, quantityItemsInCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
