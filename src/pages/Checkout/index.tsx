import { Input, Quantity } from '@components'
import { images } from '@utils'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useState } from 'react'
import { useTheme } from 'styled-components'
import { RadioMethodPayment } from './components'
import {
  Card,
  CardInfo,
  CheckoutContainer,
  FormAddress,
  FormMethodPayment,
  ItemResume,
  ItemResumeInfo,
  ItemResumeInfoActions,
  ListItensResume,
  TitleCard,
} from './styles'

export function Checkout() {
  const [methodPayment, setMethodPayment] = useState('')
  const [quantity, setQuantity] = useState(0)

  const theme = useTheme()

  function onChangeQuantity(newQuantity: number) {
    setQuantity(newQuantity)
  }

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
            <Input placeholder="CEP" name="cep" />
            <Input placeholder="Rua" name="address" />
            <div>
              <Input placeholder="Número" name="number" />
              <Input
                placeholder="Complemento"
                name="complement"
                suffix="Opcional"
                className="fill-column"
              />
            </div>
            <div>
              <Input placeholder="Bairro" name="district" />
              <Input placeholder="Cidade" name="city" />
              <Input placeholder="UF" name="uf" />
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
            <RadioMethodPayment
              icon={<CreditCard size={16} color={theme['purple-500']} />}
              label="Cartão de crédito"
              name="method-payment"
              value="credit-card"
              currentValue={methodPayment}
              onChangeValue={setMethodPayment}
            />
            <RadioMethodPayment
              icon={<Bank size={16} color={theme['purple-500']} />}
              label="Cartão de débito"
              name="method-payment"
              value="debit-card"
              currentValue={methodPayment}
              onChangeValue={setMethodPayment}
            />
            <RadioMethodPayment
              icon={<Money size={16} color={theme['purple-500']} />}
              label="Dinheiro"
              name="method-payment"
              value="money"
              currentValue={methodPayment}
              onChangeValue={setMethodPayment}
            />
          </FormMethodPayment>
        </Card>
      </div>
      <div className="resume-items">
        <TitleCard>Cafés selecionados</TitleCard>
        <Card>
          <ListItensResume>
            <ItemResume>
              <img src={images.american} alt="" />
              <ItemResumeInfo>
                <p>Expresso Tradicional</p>
                <ItemResumeInfoActions>
                  <Quantity
                    quantity={quantity}
                    onChangeQuantity={onChangeQuantity}
                  />
                  <button>Remover</button>
                </ItemResumeInfoActions>
              </ItemResumeInfo>
              <p>R$ 29,70</p>
            </ItemResume>
          </ListItensResume>
          <div>
            <div>
              <p>
                Total de itens <span>R$ 29,70</span>
              </p>
              <p>
                Entrega <span>R$ 3,50</span>
              </p>
              <p>
                Total <span>R$ 33,20</span>
              </p>
            </div>
            <button>Confirmar pedido</button>
          </div>
        </Card>
      </div>
    </CheckoutContainer>
  )
}
