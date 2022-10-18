import styled from 'styled-components'

export const ContainerInput = styled.div`
  width: 100%;
  height: 42px;
  padding: 0 0.75rem;
  display: flex;
  align-items: center;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme['gray-500']};
  background-color: ${({ theme }) => theme['gray-400']};

  input {
    width: 100%;
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme['gray-700']};

    &::placeholder {
      color: ${({ theme }) => theme['gray-600']};
    }

    &:focus {
      outline: none;
    }
  }

  &:focus-within {
    outline: 2px solid ${({ theme }) => theme['yellow-700']};
  }

  label {
    font-style: italic;
    font-size: 0.75rem;
    color: ${({ theme }) => theme['gray-600']};
  }
`
