import { Input } from '@components'
import { CoffeeDTO } from '@dtos'
import { api } from '@services'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from 'styled-components'
import { useCart } from '../../contexts/CartContext'
import { ItemResume, RadioMethodPayment } from './components'
import {
  Card,
  CardInfo,
  CheckoutContainer,
  FormAddress,
  FormMethodPayment,
  InfoResumo,
  ListItensResume,
  TitleCard,
} from './styles'

export interface CoffeeCartResume {
  coffee: CoffeeDTO
  quantity: number
}

export function Checkout() {
  const [methodPayment, setMethodPayment] = useState('')
  const [coffeesResume, setCoffeesResume] = useState<CoffeeCartResume[]>([])

  const theme = useTheme()
  const navigate = useNavigate()
  const { itemsCart } = useCart()

  function handleSubmit() {
    navigate('/success')
  }

  useEffect(() => {
    async function getCoffees() {
      const response = await api.get<CoffeeDTO[]>('/coffees')

      const coffeeFormattedToResume: CoffeeCartResume[] = itemsCart
        .filter((item) =>
          response.data.find((itemApi) => itemApi.id === item.id),
        )
        .map((item) => {
          const itemInApi = response.data.find(
            (itemApi) => itemApi.id === item.id,
          )

          return {
            coffee: itemInApi as CoffeeDTO,
            quantity: item.quantity,
          }
        })

      setCoffeesResume([...coffeeFormattedToResume])
    }
    getCoffees()
  }, [itemsCart])

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
            <Input placeholder="CEP" name="cep" className="cep" />
            <Input placeholder="Rua" name="address" className="fill-row" />
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
            {coffeesResume.map((item) => (
              <ItemResume
                key={item.coffee.id}
                coffee={item.coffee}
                quantity={item.quantity}
              />
            ))}
          </ListItensResume>
          <InfoResumo>
            <div>
              <p>
                Total de itens <span>R$ 29,70</span>
              </p>
              <p>
                Entrega <span>R$ 3,50</span>
              </p>
              <p>
                <strong>
                  Total <span>R$ 33,20</span>
                </strong>
              </p>
            </div>
            <button onClick={() => handleSubmit()}>Confirmar pedido</button>
          </InfoResumo>
        </Card>
      </div>
    </CheckoutContainer>
  )
}
