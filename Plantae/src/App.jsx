import { Route, Routes } from 'react-router-dom'
import Principal from './pages/Principal'
import Produtos from './pages/Produtos'
import Cadastro from './pages/Cadastro'
import Login from './pages/Login'


function App() {
  return (
    <Routes>
      <Route path='/' element={<Principal/>} />
      <Route path='/produtos' element={<Produtos/>}/>
      <Route path='/cadastro' element={<Cadastro/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
  )
}

export default App
