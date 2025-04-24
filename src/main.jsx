import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'
import { GlobalStyles } from './components/styles/GlobalStyles.js'
import { Provider } from 'react-redux'
import { store } from './redux/index.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </StrictMode>,
)
