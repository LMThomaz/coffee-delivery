import { CoffeeDTO } from '@dtos'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '@services'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useTheme } from 'styled-components'
import * as zod from 'zod'
import { useCart } from '../../contexts/CartContext'
import { FormAddress, ItemResume, RadioMethodPayment } from './components'
import {
  Card,
  CardInfo,
  CheckoutContainer,
  FormMethodPayment,
  InfoResumo,
  ListItensResume,
  TitleCard,
} from './styles'

export interface CoffeeCartResume {
  coffee: CoffeeDTO
  quantity: number
}

const newDeliveryAddressFormValidationSchema = zod.object({
  cep: zod
    .string()
    .min(8, 'Informe seu CEP corretamente')
    .max(9, 'Informe seu CEP corretamente'),
  address: zod.string().min(3, 'Informe sua Rua corretamente'),
  number: zod.string().min(1, 'Informe o Número corretamente'),
  complement: zod.optional(
    zod.string().min(3, 'O complemento deve ter ao menos 3 caracteres'),
  ),
  district: zod.string().min(3, 'O Bairro deve ter pelo menos 3 caracteres'),
  city: zod.string().min(3, 'A Cidade deve ter pelo menos 3 caracteres'),
  uf: zod.string().length(2, 'O UF deve ter exatamente 2 caracteres'),
})

type NewDeliveryAddressFormData = zod.infer<
  typeof newDeliveryAddressFormValidationSchema
>

export function Checkout() {
  const [methodPayment, setMethodPayment] = useState('credit-card')
  const [coffeesResume, setCoffeesResume] = useState<CoffeeCartResume[]>([])

  const newDeliveryAddressForm = useForm<NewDeliveryAddressFormData>({
    resolver: zodResolver(newDeliveryAddressFormValidationSchema),
    defaultValues: {
      address: '',
      cep: '',
      city: '',
      complement: '',
      district: '',
      number: '',
      uf: '',
    },
  })

  const theme = useTheme()
  const navigate = useNavigate()
  const { itemsCart } = useCart()

  const {
    handleSubmit,
    formState: { errors },
  } = newDeliveryAddressForm

  function handleCheckout(data: NewDeliveryAddressFormData) {
    console.log(data)
    // navigate('/success')
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

  useEffect(() => {
    Object.entries(errors).forEach(([key, { message }]) => {
      window.alert(message)
    })
  }, [errors])

  return (
    <CheckoutContainer onSubmit={handleSubmit(handleCheckout)}>
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
          <FormProvider {...newDeliveryAddressForm}>
            <FormAddress />
          </FormProvider>
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
            <button type="submit">Confirmar pedido</button>
          </InfoResumo>
        </Card>
      </div>
    </CheckoutContainer>
  )
}
