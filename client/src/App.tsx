import React from 'react';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import ProductPage from './components/ProductPage';
import CategoryPage from './components/CategoryPage';
import ShoppingCartPage from './components/ShoppingCartPage';
import { ShoppingCartProvider } from './components/ShoppingCartContext';

const App: React.FC = () => {
  return (
    <Router>
      <CssBaseline />
      <ShoppingCartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:productId" element={<ProductPage />} />
          <Route path="/category/:category/:producer?" element={<CategoryPage />} />
          <Route path="/shopping-cart" element={<ShoppingCartPage />} />
        </Routes>
      </ShoppingCartProvider>
    </Router>
  );
};

export default App;
