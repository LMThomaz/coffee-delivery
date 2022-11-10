import { Quantity } from '@components'
import { images } from '@utils'
import { Trash } from 'phosphor-react'
import { useState } from 'react'
import { useTheme } from 'styled-components'
import {
  Amount,
  ContainerItemResume,
  Divider,
  ItemResumeInfo,
  ItemResumeInfoActions,
  RemoveButton,
} from './styles'

export function ItemResume() {
  const [quantity, setQuantity] = useState(0)

  const theme = useTheme()

  function onChangeQuantity(newQuantity: number) {
    setQuantity(newQuantity)
  }

  return (
    <ContainerItemResume>
      <div>
        <img src={images.american} alt="" />
        <ItemResumeInfo>
          <p>Expresso Tradicional</p>
          <ItemResumeInfoActions>
            <Quantity quantity={quantity} onChangeQuantity={onChangeQuantity} />
            <RemoveButton>
              <Trash size={16} color={theme['purple-500']} /> Remover
            </RemoveButton>
          </ItemResumeInfoActions>
        </ItemResumeInfo>
        <Amount>R$ 29,70</Amount>
      </div>
      <Divider />
    </ContainerItemResume>
  )
}
