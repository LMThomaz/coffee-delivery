import styled from 'styled-components'

export const CheckoutContainer = styled.form`
  width: 100%;
  max-width: 72rem;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 2rem;

  .cep {
  }

  .resume-items {
    > div {
      border-radius: 6px 44px;
    }
  }
`

export const TitleCard = styled.strong`
  color: ${({ theme }) => theme['gray-800']};
  font-family: 'Baloo 2', cursive;
  font-size: 1.125rem;
  font-weight: bold;
  margin-bottom: 1rem;
`

export const Card = styled.div`
  margin-top: 0.75rem;
  background: ${({ theme }) => theme['gray-200']};
  padding: 2.5rem;
  border-radius: 6px;
`

export const CardInfo = styled.div`
  display: flex;
  gap: 0.5rem;

  p {
    color: ${({ theme }) => theme['gray-800']};
    font-size: 1rem;
  }

  span {
    color: ${({ theme }) => theme['gray-700']};
    font-size: 0.875rem;
  }
`

export const FormMethodPayment = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
`

export const ListItensResume = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const InfoResumo = styled.div`
  > div {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    p {
      color: ${({ theme }) => theme['gray-700']};
      font-size: 0.875rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      span {
        font-size: 1rem;
      }

      strong {
        width: 100%;
        display: flex;
        justify-content: space-between;
        color: ${({ theme }) => theme['gray-800']};
        font-size: 1.25rem;
      }
    }
  }

  button {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.875rem;
    margin-top: 1.5rem;
    border-radius: 6px;
    border: none;
    background-color: ${({ theme }) => theme['yellow-500']};
    color: ${({ theme }) => theme.white};
    text-transform: uppercase;
    font-size: 0.875rem;
    font-weight: bold;
    transition: all 120ms ease-in-out;

    &:hover {
      background-color: ${({ theme }) => theme['yellow-700']};
    }

    &:disabled {
      cursor: not-allowed;
      background-color: ${({ theme }) => theme['gray-500']};
      color: ${({ theme }) => theme['gray-600']};
    }
  }
`
