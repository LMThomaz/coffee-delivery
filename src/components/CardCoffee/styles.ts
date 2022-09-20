import styled from 'styled-components'

export const ContainerCardCoffee = styled.div`
  background: ${({ theme }) => theme['gray-300']};
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1.25rem 1.25rem;
  margin-top: 1.25rem;
  width: 16rem;

  img {
    margin-top: -1.25rem;
    margin-bottom: 0.75rem;
  }
`
export const TagsWrapper = styled.ul`
  display: flex;
  justify-content: center;
  gap: 4px;
`

export const Tag = styled.li`
  font-size: 0.625rem;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 100px;
  background: ${({ theme }) => theme['yellow-200']};
  color: ${({ theme }) => theme['yellow-700']};
  padding: 0.25rem 0.5rem;
`

export const Title = styled.strong`
  margin: 1rem 0 0.5rem;
  font-size: 1.25rem;
  font-family: 'Baloo 2', cursive;
  font-weight: bold;
  color: ${({ theme }) => theme['gray-800']};
`

export const Description = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme['gray-600']};
  text-align: center;
`

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
`

export const AmountWrapper = styled.div`
  color: ${({ theme }) => theme['gray-700']};
  font-family: 'Baloo 2', cursive;
  font-size: 1.5rem;

  span {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
  }
`

export const CountItemsWrapper = styled.div`
  margin-left: auto;
  background: ${({ theme }) => theme['gray-500']};
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.375rem;
  overflow: hidden;
`

export const ButtonCountItems = styled.button`
  border: none;
  background: none;
  padding: 0.5rem;
  line-height: 0;
  color: ${({ theme }) => theme['purple-500']};
`

export const ButtonAddToCart = styled.button`
  border-radius: 6px;
  height: 2.375rem;
  width: 2.375rem;
  border: none;
  color: ${({ theme }) => theme['gray-300']};
  background: ${({ theme }) => theme['purple-700']};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.5rem;
`
