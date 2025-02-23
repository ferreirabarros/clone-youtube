import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { MenuStore } from './contexts/menuContext.js'
import './index.css'
import { UserStore } from './contexts/userContext.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MenuStore>
    <UserStore>
      <App />
    </UserStore>
    </MenuStore>
  </StrictMode>,
)
