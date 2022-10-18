import { InputHTMLAttributes } from 'react'
import { ContainerInput } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  suffix?: string
}

export function Input({ suffix, name, className, ...rest }: InputProps) {
  return (
    <ContainerInput className={className}>
      <input id={name} {...rest} />
      {suffix && <label htmlFor={name}>{suffix}</label>}
    </ContainerInput>
  )
}
