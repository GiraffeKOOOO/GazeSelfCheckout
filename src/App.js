import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor"
import StartPage from './pages/StartPage';
import BasketPage from './pages/BasketPage';

function App() {
  return (
    <BrowserRouter>
      <AnimatedCursor 
        innerSize={25}
        outerSize={70}
        color='193, 11, 111'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={1}
        trailingSpeed={15}
      />
      <Routes>
        <Route path="/" element={<StartPage />}/>
        <Route path="/basket_page" element={<BasketPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;