import styled from 'styled-components'

export const ContainerQuantity = styled.div`
  background: ${({ theme }) => theme['gray-400']};
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.375rem;
  overflow: hidden;

  span {
    font-family: 'Baloo 2', cursive;
    display: block;
    width: 1rem;
    text-align: center;
    cursor: default;
    user-select: none;
  }
`

export const ButtonCountItems = styled.button`
  border: none;
  background: none;
  padding: 0.5rem;
  line-height: 0;
  color: ${({ theme }) => theme['purple-500']};
  transition: all 120ms ease-in-out;

  &:hover {
    color: ${({ theme }) => theme['purple-700']};
  }
`
