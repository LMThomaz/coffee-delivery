import logoImg from '@assets/logo.png'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { CartShopping, ContainerHeader, InfoLocation } from './styles'

export function Header() {
  return (
    <ContainerHeader>
      <Link to="/">
        <img src={logoImg} />
      </Link>
      <nav>
        <InfoLocation>
          <MapPin size={22} weight="fill" /> Taiaçu, SP
        </InfoLocation>
        <CartShopping to="/checkout">
          <ShoppingCart size={22} weight="fill" />
        </CartShopping>
      </nav>
    </ContainerHeader>
  )
}
