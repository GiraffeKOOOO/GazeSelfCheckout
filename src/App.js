import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartScreen from './pages/StartScreen';
import BasketScreen from './pages/BasketScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartScreen />}/>
        <Route path="/basket_screen" element={<BasketScreen />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;