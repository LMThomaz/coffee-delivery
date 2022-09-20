import { CardCoffee } from '@components'
import { CoffeeDTO } from '@dtos'
import { api } from '@services'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { useEffect, useState } from 'react'
import {
  CoffeeCardsWrapper,
  ContainerHome,
  HighlightList,
  HighlightListItem,
  InfoWrapper,
  IntroImage,
  IntroWrapper,
  ListCoffees,
} from './styles'

export function Home() {
  const [coffees, setCoffees] = useState<CoffeeDTO[]>([])

  useEffect(() => {
    async function getCoffees() {
      const response = await api.get('/coffees')
      setCoffees(response.data)
    }
    getCoffees()
  }, [])

  return (
    <ContainerHome>
      <IntroWrapper>
        <div>
          <InfoWrapper>
            <h2>Encontre o café perfeito{'\n'}para qualquer hora do dia</h2>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </InfoWrapper>
          <HighlightList>
            <HighlightListItem backgroundColor="yellow_dark">
              <span>
                <ShoppingCart size={16} weight="fill" />
              </span>
              Compra simples e segura
            </HighlightListItem>
            <HighlightListItem backgroundColor="gray">
              <span>
                <Package size={16} weight="fill" />
              </span>
              Embalagem mantém o café intacto
            </HighlightListItem>
            <HighlightListItem backgroundColor="yellow">
              <span>
                <Timer size={16} weight="fill" />
              </span>
              Entrega rápida e rastreada
            </HighlightListItem>
            <HighlightListItem backgroundColor="purple">
              <span>
                <Coffee size={16} weight="fill" />
              </span>
              O café chega fresquinho até você
            </HighlightListItem>
          </HighlightList>
        </div>
        <IntroImage />
      </IntroWrapper>
      <CoffeeCardsWrapper>
        <h3>Nossos cafés</h3>
        <ListCoffees>
          {coffees.map((coffee) => (
            <CardCoffee key={coffee.id} />
          ))}
        </ListCoffees>
      </CoffeeCardsWrapper>
    </ContainerHome>
  )
}
