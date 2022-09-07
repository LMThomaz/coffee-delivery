import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { ContainerHome, IntroImage, IntroWrapper } from './styles'

export function Home() {
  return (
    <ContainerHome>
      <IntroWrapper>
        <div>
          <div>
            <h2>Encontre o café perfeito para qualquer hora do dia</h2>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>
          <ul>
            <li>
              <ShoppingCart weight="fill" /> Compra simples e segura
            </li>
            <li>
              <Package weight="fill" /> Embalagem mantém o café intacto
            </li>
            <li>
              <Timer weight="fill" /> Entrega rápida e rastreada
            </li>
            <li>
              <Coffee weight="fill" /> O café chega fresquinho até você
            </li>
          </ul>
        </div>
        <IntroImage />
      </IntroWrapper>
    </ContainerHome>
  )
}
