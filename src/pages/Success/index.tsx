import { RequestDTO } from '@dtos'
import { MethodPaymentKey } from '@keys'
import { api } from '@services'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import {
  BoxDetails,
  DetailWrapper,
  IllustrationSuccess,
  InformationWrapper,
  SuccessContainer,
  TitleWrapper,
} from './styles'

interface StateLocationProps {
  requestId: number
}

export function Success() {
  const [delivery, setDelivery] = useState<RequestDTO | null>(null)

  const { state } = useLocation()
  const { requestId } = state as StateLocationProps

  useEffect(() => {
    if (requestId === 0) return

    async function getRequestById() {
      const response = await api.get<RequestDTO>(`/requests/${requestId}`)

      if (response.status !== 200) {
        toast.warn(
          'Houve algum erro ao buscar os dados do seu pedido, tente novamente mais tarde',
        )
        return
      }

      setDelivery(response.data)
    }
    getRequestById()
  }, [requestId])

  function getLabelMethodPayment(method: string) {
    switch (method) {
      case MethodPaymentKey.CREDIT_CARD:
        return 'Cartão de Crédito'
      case MethodPaymentKey.DEBIT_CARD:
        return 'Cartão de Debito'
      case MethodPaymentKey.MONEY:
        return 'Dinheiro'
      default:
        return ''
    }
  }

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
                Entrega em{' '}
                <strong>
                  {!!delivery
                    ? `${delivery.address}, ${delivery.number}`
                    : '---'}
                </strong>
              </p>
              <p>
                {!!delivery
                  ? `${delivery.district} - ${delivery.city}, ${delivery.uf}`
                  : '---'}
              </p>
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
                <strong>
                  {delivery
                    ? getLabelMethodPayment(delivery.method_payment)
                    : '---'}
                </strong>
              </p>
            </div>
          </DetailWrapper>
        </BoxDetails>
      </InformationWrapper>
      <IllustrationSuccess />
    </SuccessContainer>
  )
}
