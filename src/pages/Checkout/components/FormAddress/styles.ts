import styled from 'styled-components'

export const ContainerFormAddress = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > div {
    display: grid;
    gap: 1rem;
    grid-template-columns: 12.5rem auto 3.75rem;

    &.cep {
      width: 12.5rem;
    }

    .fill-column {
      grid-column: 2 / 4;
    }

    &.fill-row {
      grid-template-columns: auto;
    }
  }
`
