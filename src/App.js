import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartScreen from './screens/StartScreen';
import BasketScreen from './screens/BasketScreen';
import PayScreen from './screens/PayScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartScreen />}/>
        <Route path="/basket_screen" element={<BasketScreen />}/>
        <Route path="/pay_screen" element={<PayScreen />}/>
        <Route path="/payment" element={<PaymentMethodScreen />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;