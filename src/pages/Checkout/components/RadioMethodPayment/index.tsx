import classnames from 'classnames'
import { ReactNode, useRef } from 'react'
import { RadioMethodPaymentContainer } from './styles'

interface Props {
  icon: ReactNode
  label: string
  name: string
  value: string
  currentValue: string
  onChangeValue: (newValue: string) => void
}

export function RadioMethodPayment({
  icon,
  label,
  name,
  value,
  currentValue,
  onChangeValue,
}: Props) {
  const radioRef = useRef<HTMLInputElement>(null)

  function handleClickContainer() {
    radioRef.current?.click()
  }

  return (
    <RadioMethodPaymentContainer
      onClick={handleClickContainer}
      className={classnames({
        checked: radioRef.current?.checked,
      })}
    >
      <input
        type="radio"
        id={value}
        name={name}
        value={value}
        ref={radioRef}
        checked={currentValue === value}
        onChange={(event) => {
          onChangeValue(event.target.value)
        }}
      />
      {icon}
      <label>{label}</label>
    </RadioMethodPaymentContainer>
  )
}
