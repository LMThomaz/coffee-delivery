import logoImg from '@assets/logo.png'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { useCart } from '../../contexts/CartContext'
import { Badge } from '../Badge'
import { CartShopping, ContainerHeader, InfoLocation } from './styles'

export function Header() {
  const { quantityItemsInCart } = useCart()

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
          <Badge quantity={quantityItemsInCart} />
          <ShoppingCart size={22} weight="fill" />
        </CartShopping>
      </nav>
    </ContainerHeader>
  )
}
