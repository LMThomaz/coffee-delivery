import { CoffeeDTO, RequestDTO } from '@dtos'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '@services'
import { convertCentsToBRL } from '@utils'
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
import { toast } from 'react-toastify'
import { useTheme } from 'styled-components'
import * as zod from 'zod'
import { useCart } from '../../contexts/CartContext'
import { ConvertToCurrency } from '../../utils/convertToCurrency'
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

const METHODS_PAYMENT_RADIO = [
  {
    Icon: CreditCard,
    label: 'Cartão de crédito',
    name: 'method-payment',
    value: 'credit-card',
  },
  {
    Icon: Bank,
    label: 'Cartão de débito',
    name: 'method-payment',
    value: 'debit-card',
  },
  {
    Icon: Money,
    label: 'Dinheiro',
    name: 'method-payment',
    value: 'money',
  },
]

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
  const { itemsCart, quantityItemsInCart } = useCart()

  const hasItemInCart = quantityItemsInCart !== 0
  const [_, valueTotalItemsByCart] = convertCentsToBRL(
    coffeesResume.reduce(
      (acc, cur) => acc + cur.quantity * cur.coffee.amount,
      0,
    ),
  )
  const valueTotalItemsByCartConverted = Number(
    valueTotalItemsByCart.replaceAll(',', '.'),
  )
  const calculatedDeliveryPrice = hasItemInCart
    ? 3.5 + 0.2 * quantityItemsInCart
    : quantityItemsInCart

  const {
    handleSubmit,
    formState: { errors },
  } = newDeliveryAddressForm

  async function handleCheckout(data: NewDeliveryAddressFormData) {
    const payload = { ...data, method_payment: methodPayment }

    const response = await api.post<RequestDTO>('/requests', payload)

    if (response.status !== 201) {
      toast.error(
        'Houve algum erro ao cadastrar seu pedido. Tente novamente mais tarde',
      )
      return
    }

    const requestId = response.data.id

    navigate('/success', {
      state: { requestId },
    })
  }

  useEffect(() => {
    if (!hasItemInCart) {
      setCoffeesResume([])
      return
    }

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
    Object.entries(errors).forEach(([_, { message }]) => toast.warn(message))
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
            {METHODS_PAYMENT_RADIO.map(({ Icon, value, label, name }) => (
              <RadioMethodPayment
                key={value}
                icon={<Icon size={16} color={theme['purple-500']} />}
                label={label}
                name={name}
                value={value}
                currentValue={methodPayment}
                onChangeValue={setMethodPayment}
              />
            ))}
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
                Total de itens
                <span>
                  {ConvertToCurrency.BRL(valueTotalItemsByCartConverted)}
                </span>
              </p>
              <p>
                Entrega
                <span>{ConvertToCurrency.BRL(calculatedDeliveryPrice)}</span>
              </p>
              <p>
                <strong>
                  Total
                  <span>
                    {ConvertToCurrency.BRL(
                      valueTotalItemsByCartConverted + calculatedDeliveryPrice,
                    )}
                  </span>
                </strong>
              </p>
            </div>
            <button type="submit" disabled={!hasItemInCart}>
              Confirmar pedido
            </button>
          </InfoResumo>
        </Card>
      </div>
    </CheckoutContainer>
  )
}
