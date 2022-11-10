import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  width: 100%;
  max-width: 72rem;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 2rem;

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

export const FormAddress = styled.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > div {
    display: grid;
    gap: 1rem;
    grid-template-columns: 12.5rem auto 3.75rem;

    .fill-column {
      grid-column: 2 / 4;
    }
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
