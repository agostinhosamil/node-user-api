import styled, { createGlobalStyle } from 'styled-components'

export const Container = styled.div`
  width: 100%;
`

export const Global = createGlobalStyle`
  body {
    background: #fbfbfb;
  }
  
  body, h1, h2, h3 {
    margin: 0px;
    padding: 0px;
  }

  * {
    box-sizing: border-box;
  }
`