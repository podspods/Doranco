import styled from 'styled-components'



export const App = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
`;



import { createGlobalStyle } from 'styled-components'

/**
 * Contient le style globale de l'application
 */
export const AppGlobalStyle = createGlobalStyle`
  :root {
    background-color: #dbdbdb;
  }
  html, body, #root {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    min-width: 100vw;
    min-height: 100vh;
  }
  * {
    box-sizing: border-box;
  }
`