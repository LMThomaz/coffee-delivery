import { Container } from './styles'

interface Props {
  quantity: number
}

export function Badge({ quantity }: Props) {
  const hasValue = quantity !== 0
  const quantityChar = String(quantity).length

  return (
    <Container hasValue={hasValue} quantityChar={quantityChar}>
      {quantity}
    </Container>
  )
}
