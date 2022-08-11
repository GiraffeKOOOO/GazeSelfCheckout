import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartScreen from './screens/StartScreen';
import BasketScreen from './screens/BasketScreen';
import PayScreen from './screens/PayScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartScreen />}/>
        <Route path="/basket_screen" element={<BasketScreen />}/>
        <Route path="/pay_screen" element={<PayScreen />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;