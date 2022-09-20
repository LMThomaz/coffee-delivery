import americanImg from '@assets/typeCoffee/american.png'
import arabicImg from '@assets/typeCoffee/arabic.png'
import cappuccinoImg from '@assets/typeCoffee/cappuccino.png'
import coffeeWithMilkImg from '@assets/typeCoffee/coffeeWithMilk.png'
import creamyEspressoImg from '@assets/typeCoffee/creamyEspresso.png'
import cubanImg from '@assets/typeCoffee/cuban.png'
import espressoImg from '@assets/typeCoffee/espresso.png'
import hawaiianImg from '@assets/typeCoffee/hawaiian.png'
import hotChocolateImg from '@assets/typeCoffee/hotChocolate.png'
import icedCoffeeImg from '@assets/typeCoffee/icedCoffee.png'
import irishImg from '@assets/typeCoffee/irish.png'
import latteImg from '@assets/typeCoffee/latte.png'
import macchiatoImg from '@assets/typeCoffee/macchiato.png'
import mochaccinoImg from '@assets/typeCoffee/mochaccino.png'
import { CoffeeDTO } from '@dtos'
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

interface CardCoffeeProps {
  data: CoffeeDTO
}

export function CardCoffee({ data }: CardCoffeeProps) {
  const amountFormatted = String((data.amount / 100).toFixed(2)).replaceAll(
    '.',
    ',',
  )

  const images = {
    espresso: espressoImg,
    american: americanImg,
    arabic: arabicImg,
    cappuccino: cappuccinoImg,
    coffeeWithMilk: coffeeWithMilkImg,
    creamyEspresso: creamyEspressoImg,
    cuban: cubanImg,
    hawaiian: hawaiianImg,
    hotChocolate: hotChocolateImg,
    icedCoffee: icedCoffeeImg,
    irish: irishImg,
    latte: latteImg,
    macchiato: macchiatoImg,
    mochaccino: mochaccinoImg,
  }

  const imageToUsed = images[data.image as keyof typeof images]

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
        <AmountWrapper>
          <span>R$ </span>
          {amountFormatted}
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
