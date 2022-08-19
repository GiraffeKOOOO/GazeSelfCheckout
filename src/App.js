import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartScreen from './screens/StartScreen';
import BasketScreen from './screens/BasketScreen';
import PayScreen from './screens/PayScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import ReceiptScreen from './screens/ReceiptScreen';
import SearchScreen from './screens/SearchScreen';
import ProductCategoryPage from './components/ProductCategoryPage';
import { CartProvider } from './components/CartContext';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<StartScreen />}/>
          <Route path="/basket_screen" element={<BasketScreen />}/>
          <Route path="/pay_screen" element={<PayScreen />}/>
          <Route path="/payment" element={<PaymentMethodScreen />}/>
          <Route path="/product_category" element={<ProductCategoryPage />}/>
          <Route path="/receipt_screen" element={<ReceiptScreen />}/>
          <Route path="/search_item" element={<SearchScreen />}/>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;