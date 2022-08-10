import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from './pages/StartPage';
import BasketPage from './pages/BasketPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />}/>
        <Route path="/basket_page" element={<BasketPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;