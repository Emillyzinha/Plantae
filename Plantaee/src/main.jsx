import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import TelaPrincipal from './pages/principal'
import Rodape from './components/rodape/rodape'
import Nav from './components/nav/nav'
import Produtos from './pages/produtos'
import EscolherProduto from './components/escolherProduto/escolherProduto'
import ProdutoEscolhido from './pages/produtoEscolhido'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import InfoPlanta from './components/infoPlanta/infoPlanta'

const router = createBrowserRouter([
  {
    path: "/inicio",
    element: <TelaPrincipal />,
  },
  {
    path: "/produtoescolhido",
    element: <ProdutoEscolhido />,
    // element: <InfoPlanta/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <Nav /> */}
    {/* <TelaPrincipal /> */}
    {/* <Produtos/> */}
    {/* <ProdutoEscolhido /> */}
    {/* <Rodape/> */}
  </React.StrictMode>,
)
