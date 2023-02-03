import { Input } from '@components'
import { useFormContext } from 'react-hook-form'
import { ContainerFormAddress } from './styles'

export function FormAddress() {
  const { register } = useFormContext()

  return (
    <ContainerFormAddress>
      <Input
        placeholder="CEP"
        className="cep"
        register={register}
        name="cep"
        maxLength={9}
      />
      <Input
        placeholder="Rua"
        className="fill-row"
        register={register}
        name="address"
      />
      <div>
        <Input placeholder="Número" register={register} name="number" />
        <Input
          placeholder="Complemento"
          suffix="Opcional"
          className="fill-column"
          register={register}
          name="complement"
        />
      </div>
      <div>
        <Input placeholder="Bairro" register={register} name="district" />
        <Input placeholder="Cidade" register={register} name="city" />
        <Input placeholder="UF" register={register} name="uf" maxLength={2} />
      </div>
    </ContainerFormAddress>
  )
}
