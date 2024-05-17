import { HomePage } from "./Pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BestSeller } from "./Pages/BestSeller";
import { Favourites } from "./Pages/Favourites";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/bestseller" element={<BestSeller />} />
              <Route path="/favourites" element={<Favourites />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App
