import { Quantity } from '@components'
import { convertCentsToBRL, images } from '@utils'
import { Trash } from 'phosphor-react'
import { useState } from 'react'
import { useTheme } from 'styled-components'
import { CoffeeCartResume } from '../..'
import { useCart } from '../../../../contexts/CartContext'
import {
  Amount,
  ContainerItemResume,
  Divider,
  ItemResumeInfo,
  ItemResumeInfoActions,
  RemoveButton,
} from './styles'

export function ItemResume({ coffee, quantity }: CoffeeCartResume) {
  const [quantityInResume, setQuantityInResume] = useState(quantity)

  const theme = useTheme()
  const { addNewItemCart, removeItemToCart } = useCart()

  const imageToUsed = images[coffee.image as keyof typeof images]

  const amountWithQuantity = coffee.amount * quantityInResume
  const [currency, amountFormatted] = convertCentsToBRL(amountWithQuantity)

  function onChangeQuantity(newQuantity: number) {
    addNewItemCart({
      id: coffee.id,
      quantity: newQuantity - quantityInResume,
    })
    setQuantityInResume(newQuantity)
  }

  return (
    <ContainerItemResume>
      <div>
        <img src={imageToUsed} alt="" />
        <ItemResumeInfo>
          <p>{coffee.title}</p>
          <ItemResumeInfoActions>
            <Quantity
              min={1}
              quantity={quantityInResume}
              onChangeQuantity={onChangeQuantity}
            />
            <RemoveButton
              onClick={() => removeItemToCart(coffee.id)}
              type="button"
            >
              <Trash size={16} color={theme['purple-500']} /> Remover
            </RemoveButton>
          </ItemResumeInfoActions>
        </ItemResumeInfo>
        <Amount>
          {currency} {amountFormatted}
        </Amount>
      </div>
      <Divider />
    </ContainerItemResume>
  )
}
