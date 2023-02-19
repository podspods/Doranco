import { StrictMode } from 'react'
import { AppGlobalStyle } from '../style/App.style'
import Counter from './Counter'
/**
 * main component for the application
 * @returns 
 * 
 */

export default function App() {
  return (
    <StrictMode>
      <AppGlobalStyle />
      <Counter />
    </StrictMode>

  )
}