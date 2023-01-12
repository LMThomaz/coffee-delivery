import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  BoxDetails,
  DetailWrapper,
  IllustrationSuccess,
  InformationWrapper,
  SuccessContainer,
  TitleWrapper,
} from './styles'

export function Success() {
  return (
    <SuccessContainer>
      <InformationWrapper>
        <TitleWrapper>
          <h2>Uhu! Pedido confirmado</h2>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </TitleWrapper>
        <BoxDetails>
          <DetailWrapper backgroundColor="purple">
            <span>
              <MapPin size={16} weight="fill" />
            </span>
            <div>
              <p>
                Entrega em <strong>Rua João Daniel, 102</strong>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
            </div>
          </DetailWrapper>
          <DetailWrapper backgroundColor="yellow">
            <span>
              <Timer size={16} weight="fill" />
            </span>
            <div>
              <p>Previsão de entrega</p>
              <p>
                <strong>20 min - 30 min</strong>
              </p>
            </div>
          </DetailWrapper>
          <DetailWrapper backgroundColor="yellow_dark">
            <span>
              <CurrencyDollar size={16} weight="fill" />
            </span>
            <div>
              <p>Pagamento na entrega</p>
              <p>
                <strong>Cartão de Crédito</strong>
              </p>
            </div>
          </DetailWrapper>
        </BoxDetails>
      </InformationWrapper>
      <IllustrationSuccess />
    </SuccessContainer>
  )
}
