import { forwardRef, InputHTMLAttributes } from 'react'
import { ContainerInput } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  suffix?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ suffix, name, className, ...rest }, ref) => {
    return (
      <ContainerInput className={className}>
        <input id={name} ref={ref} {...rest} />
        {suffix && <label htmlFor={name}>{suffix}</label>}
      </ContainerInput>
    )
  },
)
