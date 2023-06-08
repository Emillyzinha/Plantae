import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './componentes/nav/nav'
import './index.css'
import Principal from './pages/principal'
import Personalize from './componentes/Personalize/personalize'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Principal/>
  </React.StrictMode>,
)
