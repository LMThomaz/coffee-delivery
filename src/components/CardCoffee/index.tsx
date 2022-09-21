import { CoffeeDTO } from '@dtos'
import { images } from '@utils'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import {
  AmountWrapper,
  ButtonAddToCart,
  ButtonCountItems,
  ContainerCardCoffee,
  CountItemsWrapper,
  Description,
  Footer,
  Tag,
  TagsWrapper,
  Title,
} from './styles'

interface CardCoffeeProps {
  data: CoffeeDTO
}

export function CardCoffee({ data }: CardCoffeeProps) {
  const [quantity, setQuantity] = useState(0)
  const amountWithQuantity =
    quantity === 0 ? data.amount : data.amount * quantity
  const amountFormatted = String(
    (amountWithQuantity / 100).toFixed(2),
  ).replaceAll('.', ',')

  const imageToUsed = images[data.image as keyof typeof images]

  function handleAddQuantityCoffee() {
    setQuantity((oldState) => {
      if (oldState >= 10) return 10
      return oldState + 1
    })
  }

  function handleDecreaseQuantityCoffee() {
    setQuantity((oldState) => {
      if (oldState <= 0) return 0
      return oldState - 1
    })
  }

  const showInformationUnitValue = quantity === 0

  return (
    <ContainerCardCoffee>
      <img src={imageToUsed} alt={`Imagem do café ${data.title}`} />
      <TagsWrapper>
        {data.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </TagsWrapper>
      <Title>{data.title}</Title>
      <Description>{data.description}</Description>
      <Footer>
        <AmountWrapper showInformationUnitValue={showInformationUnitValue}>
          <span>R$ </span>
          {amountFormatted}
        </AmountWrapper>
        <CountItemsWrapper>
          <ButtonCountItems onClick={handleDecreaseQuantityCoffee}>
            <Minus size={14} weight="bold" />
          </ButtonCountItems>
          <span>{quantity}</span>
          <ButtonCountItems onClick={handleAddQuantityCoffee}>
            <Plus size={14} weight="bold" />
          </ButtonCountItems>
        </CountItemsWrapper>
        <ButtonAddToCart>
          <ShoppingCart weight="fill" size={22} />
        </ButtonAddToCart>
      </Footer>
    </ContainerCardCoffee>
  )
}
