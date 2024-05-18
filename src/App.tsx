import { HomePage } from "./Pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BestSeller } from "./Pages/BestSeller";
import { Favourites } from "./Pages/Favourites";
import { validateWebApiCookie } from "./Helpers/User.tsx";
import { Login } from "./Pages/Login";
import { NotFound } from "./Pages/NotFound";


function App() {
    const isValidJwt = validateWebApiCookie();

    return (
        <BrowserRouter>
            <Routes>
              {isValidJwt ? (
                  <>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/bestseller" element={<BestSeller />} />
                      <Route path="/favourites" element={<Favourites />} />
                      <Route path="*" element={<NotFound />} />
                  </>
              ): (<Route path="*" element={<Login />} />)
              }
          </Routes>
      </BrowserRouter>
    )
}

export default App
