import { BrowserRouter, Routes, Route, Navigate}  from 'react-router-dom'
import Cadastro from './Pages/Cadastro/index'
import Login from './Pages/Login/index'
import ListarUsuarios from './Pages/Lista'

function App() {
  
  

  return (


    
      <BrowserRouter>

      <header className='w-full bg-blue-700 text-white text-2xl font-semibold text-center p-3 mt-2 border border-b-indigo-950  '>
        <h1>Sistema de Cadastro e Login</h1>
      </header>

      <Routes>
      <Route path='/' element = {<Cadastro/>}/>
      <Route path='/cadastro' element = {<Cadastro/>}/>
      <Route path='/login' element = {<Login/>}/>
      <Route path='/listar-usuarios' element = {<ListarUsuarios/>}/>
   
      </Routes>
      </BrowserRouter>
      
    
  )
}

export default App
