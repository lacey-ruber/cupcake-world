import ReactDOM from 'react-dom/client'
import App from './App'
import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'

const rootElem = document.getElementById('root')

if (rootElem) {
  const root = ReactDOM.createRoot(rootElem)

  root.render(
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  )
}
