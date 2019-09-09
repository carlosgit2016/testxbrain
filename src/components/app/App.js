import React from 'react';
import Products from '../Products';
import { products } from '../../data/products.json'; //imported products database
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Products products={products} ></Products>
    </div>
  )
}

export default App;


