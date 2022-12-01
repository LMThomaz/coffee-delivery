import styled from 'styled-components'

export const ContainerItemResume = styled.div`
  > div {
    display: flex;
    gap: 1.25rem;
    color: ${({ theme }) => theme['gray-800']};
    height: 5rem;

    img {
      width: 4rem;
      height: 4rem;
    }
  }
`

export const Divider = styled.span`
  height: 1px;
  width: 100%;
  display: block;
  background-color: ${({ theme }) => theme['gray-400']};
  margin: 1.5rem 0;
`

export const ItemResumeInfo = styled.div`
  p {
    font-size: 1rem;
  }
`

export const ItemResumeInfoActions = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`

export const RemoveButton = styled.button`
  border-radius: 6px;
  border: none;
  font-size: 0.75rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme['gray-700']};
  background-color: ${({ theme }) => theme['gray-400']};
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0 0.5rem;

  &:hover {
    background-color: ${({ theme }) => theme['gray-500']};
  }
`

export const Amount = styled.p`
  color: ${({ theme }) => theme['gray-700']};
  font-size: 1rem;
  font-weight: 700;
  margin-left: auto;
`
