import { createGlobalStyle } from 'styled-components'

// * COLORS
export const blue = '#102d71'
export const black = '#000000'
export const red = '#C12A23'
export const title = '#fffcf9'
export const subtitle = '#b3b3b3'
export const button = '#e9e6e3'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    overflow: hidden;
    font-family: 'Poppins', sans-serif;
  }
`
