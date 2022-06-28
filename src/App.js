import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from './pages/StartPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="startpage" element={<StartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;