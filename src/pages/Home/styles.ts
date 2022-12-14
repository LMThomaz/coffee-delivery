import backgroundIntroImg from '@assets/background-intro.png'
import introImg from '@assets/intro.png'
import styled from 'styled-components'

export const ContainerHome = styled.div`
  background: url(${backgroundIntroImg}) no-repeat;
  background-size: 100% 34rem;
`

export const IntroWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: center;
  max-width: 72rem;
  width: 100%;
  margin: 0 auto;
  min-height: 34rem;
  padding: 0 1rem;
`

export const IntroImage = styled.img.attrs({
  src: introImg,
  alt: '',
})`
  height: 22.5rem;
  width: 29.75rem;
`
export const InfoWrapper = styled.div`
  h2 {
    white-space: break-spaces;
    font-size: 3rem;
    font-weight: 800;
    color: ${({ theme }) => theme['gray-900']};
  }
  p {
    font-size: 1.25rem;
    margin-top: 1rem;
  }
`

export const HighlightList = styled.ul`
  margin-top: 4.125rem;
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 1.25rem 2.5rem;
`

const HIGHLIGHT_ITEM_BACKGROUND = {
  gray: 'gray-700',
  purple: 'purple-500',
  yellow: 'yellow-500',
  yellow_dark: 'yellow-700',
} as const

interface HighlightItemProps {
  backgroundColor: keyof typeof HIGHLIGHT_ITEM_BACKGROUND
}

export const HighlightListItem = styled.li<HighlightItemProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;

  span {
    height: 2rem;
    width: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme, backgroundColor }) =>
      theme[HIGHLIGHT_ITEM_BACKGROUND[backgroundColor]]};
    color: ${({ theme }) => theme['gray-100']};
    border-radius: 50%;
  }
`

export const CoffeeCardsWrapper = styled.div`
  max-width: 72rem;
  padding: 2rem 1rem 9rem;
  margin: 0 auto;

  h3 {
    display: block;
    margin-bottom: 3.375rem;
    color: ${({ theme }) => theme['gray-800']};
    font-weight: 900;
    font-size: 2rem;
  }
`

export const ListCoffees = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 2rem;
`
