import { HomePage } from "./Pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BestSeller } from "./Pages/BestSeller";
function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/bestseller" element={<BestSeller />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App
