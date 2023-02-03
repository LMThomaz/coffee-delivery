import styled from 'styled-components'

export const ContainerHeader = styled.header`
  max-width: 70rem;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    gap: 0.75rem;
  }
`

export const InfoLocation = styled.button`
  border: none;
  border-radius: 6px;
  padding: 0.5rem;
  line-height: 1.3;
  font-size: 0.875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  background-color: ${({ theme }) => theme['purple-200']};
  color: ${({ theme }) => theme['purple-700']};
  cursor: default;
`

export const CartShopping = styled.button`
  border: none;
  border-radius: 6px;
  padding: 0.5rem;
  line-height: 1.3;
  font-size: 0.875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  background-color: ${({ theme }) => theme['yellow-200']};
  color: ${({ theme }) => theme['yellow-700']};
  box-shadow: 0 0 0 0 ${({ theme }) => theme['yellow-700']};
  cursor: pointer;
  transition: all 80ms ease-in-out;
  position: relative;

  &:hover {
    box-shadow: 0 0 0 2px ${({ theme }) => theme['yellow-700']};
  }

  &:disabled {
    cursor: not-allowed;
    box-shadow: 0 0 0 0 ${({ theme }) => theme['gray-500']};
    background-color: ${({ theme }) => theme['gray-400']};
    color: ${({ theme }) => theme['gray-600']};
  }
`
