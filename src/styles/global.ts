import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: ${({ theme }) => theme['gray-100']}
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-size: .875rem;
    font-weight: 400;
    line-height: 1.3;
  }

  li {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  h1,h2,h3,h4 {
    font-family: 'Baloo 2', cursive;
  }
`
