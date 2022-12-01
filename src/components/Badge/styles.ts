import styled, { css } from 'styled-components'

interface ContainerProps {
  hasValue: boolean
  quantityChar: number
}

export const Container = styled.div<ContainerProps>`
  height: 1.25rem;
  line-height: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.25rem;
  background-color: ${({ theme }) => theme['yellow-700']};
  color: ${({ theme }) => theme.white};
  font-size: 0.75rem;
  font-weight: bold;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(40%, -40%);
  transition: all 120ms ease-in-out;

  ${({ quantityChar }) =>
    css`
      width: ${0.5 * quantityChar + 0.75}rem;
    `}

  ${({ hasValue }) =>
    !hasValue &&
    css`
      width: 0;
      height: 0;
      font-size: 0;
    `}
`
