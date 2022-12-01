import logoImg from '@assets/logo.png'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { Badge } from '../Badge'
import { CartShopping, ContainerHeader, InfoLocation } from './styles'

interface Props {
  quantityItemsCard?: number
}

export function Header({ quantityItemsCard = 10 }: Props) {
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
          <Badge quantity={quantityItemsCard} />
          <ShoppingCart size={22} weight="fill" />
        </CartShopping>
      </nav>
    </ContainerHeader>
  )
}
