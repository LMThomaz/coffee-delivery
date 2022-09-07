import backgroundIntroImg from '@assets/background-intro.png'
import introImg from '@assets/intro.png'
import styled from 'styled-components'

export const ContainerHome = styled.div``

export const IntroWrapper = styled.div`
  background: url(${backgroundIntroImg}) no-repeat;
  background-size: 100% 100%;
`

export const IntroImage = styled.img.attrs({
  src: introImg,
  alt: '',
})`
  height: 22.5rem;
  width: 29.75rem;
`
