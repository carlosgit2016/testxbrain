// material-ui
import { Container } from '@material-ui/core';
import { blue, orange } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
// react
import React from 'react';
// fe-test-master
import { products } from '../../data/products.json'; //imported products database
import Products from '../Products';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: orange
  },
});

const App = () => {

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container>
            <Products products={products} ></Products>
        </Container>
      </ThemeProvider>
    </div>
  )
}

export default App;


