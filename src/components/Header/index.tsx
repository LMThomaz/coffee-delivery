import logoImg from '@assets/logo.png'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { CartShopping, ContainerHeader, InfoLocation } from './styles'

export function Header() {
  return (
    <ContainerHeader>
      <img src={logoImg} />
      <nav>
        <InfoLocation>
          <MapPin size={22} weight="fill" /> Taiaçu, SP
        </InfoLocation>
        <CartShopping>
          <ShoppingCart size={22} weight="fill" />
        </CartShopping>
      </nav>
    </ContainerHeader>
  )
}
