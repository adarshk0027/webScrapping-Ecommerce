import './App.css'
import React, { useState, useEffect } from 'react'
import SearchBar from './components'
import ContainerWrapper from './components/Container'
import axios from 'axios'


function App () {
  const [Products, setProducts] = useState([])

  useEffect(() => {
    fetchProducts()
  }, [])

  async function fetchProducts () {
    let productData = await axios.get('https://webscrap-21.herokuapp.com/')
    
    setProducts(productData.data.data)
  }

  return (
    <div className='App'>
      <SearchBar Products={Products} DataState={setProducts}></SearchBar>
      <ContainerWrapper ProductsData={Products}></ContainerWrapper>
    </div>
  )
}

export default App
