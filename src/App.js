import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartScreen from './screens/StartScreen';
import BasketScreen from './screens/BasketScreen';

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