import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Self-hosted variable fonts (no Google Fonts <link>).
import '@fontsource-variable/outfit'
import '@fontsource-variable/work-sans'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
