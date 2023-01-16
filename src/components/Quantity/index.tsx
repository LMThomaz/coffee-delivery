import { Minus, Plus } from 'phosphor-react'
import { ButtonCountItems, ContainerQuantity } from './styles'

interface Props {
  quantity: number
  onChangeQuantity: (newQuantity: number) => void
  min?: number
  max?: number
}

export function Quantity({
  quantity,
  onChangeQuantity,
  min = 0,
  max = 10,
}: Props) {
  function handleAddQuantityCoffee() {
    if (quantity >= max) return onChangeQuantity(max)
    onChangeQuantity(quantity + 1)
  }

  function handleDecreaseQuantityCoffee() {
    if (quantity <= min) return onChangeQuantity(min)
    onChangeQuantity(quantity - 1)
  }

  return (
    <ContainerQuantity>
      <ButtonCountItems
        onClick={handleDecreaseQuantityCoffee}
        disabled={quantity <= min}
      >
        <Minus size={14} weight="bold" />
      </ButtonCountItems>
      <span>{quantity}</span>
      <ButtonCountItems
        onClick={handleAddQuantityCoffee}
        disabled={quantity >= max}
      >
        <Plus size={14} weight="bold" />
      </ButtonCountItems>
    </ContainerQuantity>
  )
}
