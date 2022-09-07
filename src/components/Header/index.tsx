import logoImg from '@assets/logo.png'
import { ContainerHeader } from './styles'

export function Header() {
  return (
    <ContainerHeader>
      <img src={logoImg} />
    </ContainerHeader>
  )
}
