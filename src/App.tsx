import { HomePage } from "./Pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BestSeller } from "./Pages/BestSeller";
import { Favourites } from "./Pages/Favourites";
import { validateWebApiCookie } from "./Helpers/User.tsx";
import { Login } from "./Pages/Login";
import { NotFound } from "./Pages/NotFound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { EditBook } from "./Pages/EditBook";

const queryClient = new QueryClient();
const isValidJwt = validateWebApiCookie();

function App() {

    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    {isValidJwt ? (
                        <>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/bestseller" element={<BestSeller />} />
                            <Route path="/favourites" element={<Favourites />} />
                            <Route path="/favourites/edit/:bookId" element={<EditBook />} />
                            <Route path="*" element={<NotFound />} />
                        </>
                    ): (<Route path="*" element={<Login />} />)
                    }
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    )
}

export default App
