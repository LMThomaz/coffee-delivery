import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useTheme } from 'styled-components'
import {
  Card,
  CardInfo,
  CheckoutContainer,
  FormAddress,
  FormMethodPayment,
  TitleCard,
} from './styles'

export function Checkout() {
  const theme = useTheme()

  return (
    <CheckoutContainer>
      <div>
        <TitleCard>Complete seu pedido</TitleCard>
        <Card>
          <CardInfo>
            <MapPinLine color={theme['yellow-700']} size={22} />
            <div>
              <p>Endereço de Entrega</p>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </CardInfo>
          <FormAddress>
            <input placeholder="CEP" />
            <input placeholder="Rua" />
            <div>
              <input placeholder="Número" />
              <input placeholder="Complemento" />
            </div>
            <div>
              <input placeholder="Bairro" />
              <input placeholder="Cidade" />
              <input placeholder="UF" />
            </div>
          </FormAddress>
        </Card>
        <Card>
          <CardInfo>
            <CurrencyDollar color={theme['purple-500']} size={22} />
            <div>
              <p>Pagamento</p>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </CardInfo>
          <FormMethodPayment>
            <div>
              <input type="radio" name="method-payment" value="credit-card" />
              <CreditCard />
              <span>Cartão de crédito</span>
            </div>
            <div>
              <input type="radio" name="method-payment" value="debit-card" />
              <Bank />
              <span>Cartão de débito</span>
            </div>
            <div>
              <input type="radio" name="method-payment" value="money" />
              <Money />
              <span>Dinheiro</span>
            </div>
          </FormMethodPayment>
        </Card>
      </div>
      <div>
        <TitleCard>Cafés selecionados</TitleCard>
        <Card></Card>
      </div>
    </CheckoutContainer>
  )
}
