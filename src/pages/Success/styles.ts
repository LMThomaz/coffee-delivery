import styled from 'styled-components'

import imageIllustrationSuccess from '@assets/illustration-success.svg'

export const SuccessContainer = styled.div`
  width: 100%;
  max-width: 72rem;
  margin: 0 auto;
  padding: 5rem 1rem 0;
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  align-items: end;
  gap: 6.5rem;
`

export const InformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  h2 {
    color: ${({ theme }) => theme['yellow-700']};
    font-size: 2rem;
    font-weight: 900;
  }

  p {
    color: ${({ theme }) => theme['gray-800']};
    font-size: 1.25rem;
  }
`

export const BoxDetails = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  background: linear-gradient(
        ${({ theme }) => theme['gray-100']},
        ${({ theme }) => theme['gray-100']}
      )
      padding-box,
    linear-gradient(
        to right,
        ${({ theme }) => theme['yellow-500']},
        ${({ theme }) => theme['purple-500']}
      )
      border-box;
  border-radius: 6px 36px;
  border: 1px solid transparent;
`

const DETAIL_WRAPPER_BACKGROUND = {
  purple: 'purple-500',
  yellow: 'yellow-500',
  yellow_dark: 'yellow-700',
} as const

interface DetailWrapperProps {
  backgroundColor: keyof typeof DETAIL_WRAPPER_BACKGROUND
}

export const DetailWrapper = styled.div<DetailWrapperProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    height: 2rem;
    width: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme, backgroundColor }) =>
      theme[DETAIL_WRAPPER_BACKGROUND[backgroundColor]]};
    color: ${({ theme }) => theme['gray-100']};
    border-radius: 50%;
  }
  p {
    font-size: 1rem;
  }
`

export const IllustrationSuccess = styled.img.attrs({
  src: imageIllustrationSuccess,
})`
  width: 100%;
`
