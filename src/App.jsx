import { BrowserRouter, Link, Route, Routes } from 'react-router'
import { Card } from './components/Card'
import { Titulo } from './components/Titulo'
import { Navbar } from './components/Navbar'
import { Contacto } from './pages/Contacto'
import { Product } from './pages/Product'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<h1>Estoy en el inicio</h1>}></Route>
          <Route
            path='/productos'
            element={<h1>Estoy en productos</h1>}></Route>
          <Route
            path='/productos/:id'
            element={<Product></Product>}></Route>
          <Route
            path='/contacto'
            element={<Contacto></Contacto>}></Route>
          <Route
            path='/productos/categoria/todos'
            element={
              <h1>Estoy en la categoria de todos los productos</h1>
            }></Route>
          <Route
            path='*'
            element={
              <Link to='/'>Volver al inicio con Link</Link> // <a href='/'>Volver al inicio</a>
            }></Route>
        </Routes>
      </BrowserRouter>
      <footer>Todos los derechos reservados</footer>
    </div>
  )
}

export default App
