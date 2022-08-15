import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartScreen from './screens/StartScreen';
import BasketScreen from './screens/BasketScreen';
import PayScreen from './screens/PayScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import ReceiptScreen from './screens/ReceiptScreen';
import SearchScreen from './screens/SearchScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartScreen />}/>
        <Route path="/basket_screen" element={<BasketScreen />}/>
        <Route path="/pay_screen" element={<PayScreen />}/>
        <Route path="/payment" element={<PaymentMethodScreen />}/>
        <Route path="/receipt_screen" element={<ReceiptScreen />}/>
        <Route path="/search_item" element={<SearchScreen />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;