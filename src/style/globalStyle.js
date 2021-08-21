import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import './normalize.css'
export const GlobalStyle = createGlobalStyle`
  *{ 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    border: 10px solid red;
    min-height: 100vh;
    height: 100%;
    width: 100%;
    margin: auto;
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-style: normal;
    font-weight: 500;
  }
`

export const Wrapper = styled.section`
    padding: 0 16px;
    max-width: 2000px;
    margin: auto;
    width: 100%;
    @media (min-width: 680px) {
        width: 95%;
        padding: 0;
    }
`
