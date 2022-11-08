import { Minus, Plus } from 'phosphor-react'
import { ButtonCountItems, ContainerQuantity } from './styles'

interface Props {
  quantity: number
  onChangeQuantity: (newQuantity: number) => void
}

export function Quantity({ quantity, onChangeQuantity }: Props) {
  function handleAddQuantityCoffee() {
    if (quantity >= 10) onChangeQuantity(10)
    onChangeQuantity(quantity + 1)
  }

  function handleDecreaseQuantityCoffee() {
    if (quantity <= 0) onChangeQuantity(0)
    onChangeQuantity(quantity - 1)
  }

  return (
    <ContainerQuantity>
      <ButtonCountItems onClick={handleDecreaseQuantityCoffee}>
        <Minus size={14} weight="bold" />
      </ButtonCountItems>
      <span>{quantity}</span>
      <ButtonCountItems onClick={handleAddQuantityCoffee}>
        <Plus size={14} weight="bold" />
      </ButtonCountItems>
    </ContainerQuantity>
  )
}
