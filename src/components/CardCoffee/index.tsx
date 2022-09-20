import espressoImg from '@assets/typeCoffee/espresso.png'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
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

export function CardCoffee() {
  return (
    <ContainerCardCoffee>
      <img src={espressoImg} alt="Imagem do café expresso" />
      <TagsWrapper>
        <Tag>Tradicional</Tag>
      </TagsWrapper>
      <Title>Expresso Tradicional</Title>
      <Description>
        O tradicional café feito com água quente e grãos moídos
      </Description>
      <Footer>
        <AmountWrapper>
          <span>R$ </span>
          9,90
        </AmountWrapper>
        <CountItemsWrapper>
          <ButtonCountItems>
            <Minus size={14} />
          </ButtonCountItems>
          <span>1</span>
          <ButtonCountItems>
            <Plus size={14} />
          </ButtonCountItems>
        </CountItemsWrapper>
        <ButtonAddToCart>
          <ShoppingCart weight="fill" size={22} />
        </ButtonAddToCart>
      </Footer>
    </ContainerCardCoffee>
  )
}
