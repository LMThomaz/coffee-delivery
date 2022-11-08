import { CoffeeDTO } from '@dtos'
import { convertCentsToBRL, images } from '@utils'
import { ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import { Quantity } from '../Quantity'
import {
  AmountWrapper,
  ButtonAddToCart,
  ContainerCardCoffee,
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

  const [currency, amountFormatted] = convertCentsToBRL(amountWithQuantity)

  const imageToUsed = images[data.image as keyof typeof images]

  const showInformationUnitValue = quantity === 0

  function onChangeQuantity(newQuantity: number) {
    setQuantity(newQuantity)
  }

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
          <span>{currency} </span>
          {amountFormatted}
        </AmountWrapper>
        <Quantity quantity={quantity} onChangeQuantity={onChangeQuantity} />
        <ButtonAddToCart>
          <ShoppingCart weight="fill" size={22} />
        </ButtonAddToCart>
      </Footer>
    </ContainerCardCoffee>
  )
}
