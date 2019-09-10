//material-ui
import { blue } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
//react
import React from 'react';
//fe-test-master
import { products } from '../../data/products.json'; //imported products database
import Products from '../Products';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: blue
  }
});

const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Products products={products} ></Products>
      </ThemeProvider>
    </div>
  )
}

export default App;


