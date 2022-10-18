import styled from 'styled-components'

export const RadioMethodPaymentContainer = styled.button`
  background-color: ${({ theme }) => theme['gray-400']};
  border: none;
  border-radius: 6px;
  padding: 1rem;
  display: grid;
  grid-template-columns: 0 1rem auto;
  align-items: center;
  transition: all 120ms ease-in-out;

  label {
    margin-left: 0.75rem;
    text-transform: uppercase;
    text-align: left;
    color: ${({ theme }) => theme['gray-700']};
    font-size: 0.75rem;
    cursor: pointer;
  }

  &:hover {
    background-color: ${({ theme }) => theme['gray-500']};
  }

  &.checked {
    background-color: ${({ theme }) => theme['purple-200']};
    outline: 1px solid ${({ theme }) => theme['purple-500']};
  }
`
