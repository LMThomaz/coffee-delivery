import { InputHTMLAttributes } from 'react'
import { ContainerInput } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  suffix?: string
  register?: any
}

export function Input(props: InputProps) {
  const { suffix, name, className, register = {}, itemRef, ...rest } = props

  return (
    <ContainerInput className={className}>
      <input id={name} ref={itemRef} {...rest} {...register(name)} />
      {suffix && <label htmlFor={name}>{suffix}</label>}
    </ContainerInput>
  )
}
