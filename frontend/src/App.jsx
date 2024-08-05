import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ShowProduct from './pages/ShowProduct.jsx'
import EditProduct from './pages/EditProduct.jsx'
import CreateProduct from './pages/CreateProduct.jsx'
import DeleteProduct from './pages/DeleteProduct.jsx'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products/create' element={<CreateProduct />} />
      <Route path='/products/details/:id' element={<ShowProduct />} />
      <Route path='/products/edit/:id' element={<EditProduct />} />
      <Route path='/products/delete/:id' element={<DeleteProduct />} />
    </Routes>
  )
}

export default App
