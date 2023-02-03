import logoImg from '@assets/logo.png'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../../contexts/CartContext'
import { Badge } from '../Badge'
import { CartShopping, ContainerHeader, InfoLocation } from './styles'

export function Header() {
  const navigate = useNavigate()
  const { quantityItemsInCart } = useCart()

  function handleNavigateToCart() {
    navigate('/checkout')
  }

  const disabledNavigateToCart = quantityItemsInCart === 0

  return (
    <ContainerHeader>
      <Link to="/">
        <img src={logoImg} />
      </Link>
      <nav>
        <InfoLocation>
          <MapPin size={22} weight="fill" /> Taiaçu, SP
        </InfoLocation>
        <CartShopping
          onClick={handleNavigateToCart}
          disabled={disabledNavigateToCart}
        >
          <Badge quantity={quantityItemsInCart} />
          <ShoppingCart size={22} weight="fill" />
        </CartShopping>
      </nav>
    </ContainerHeader>
  )
}
