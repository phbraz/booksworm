import { Layout } from "../../Components/Core/Layout";
import { BookSearch } from "../../Components/BookSearch";
import { BooksTableContent } from "../../Components/Core/BooksTableContent";
import { FindFavouriteBookByUser, GetFavouriteBooks } from "../../API/Calls.tsx";
import { useQuery } from "@tanstack/react-query";
import { Book, FavouriteBooksByUser } from "../../API/Models";
import { CircularProgress } from "@mui/material";
import { useLocation } from "react-router-dom";

const Favourites = () => {
    const location = useLocation();
    const bookDataFromUserSearch: Book[] = location.state?.bookUserSearchResponse ? location.state.bookUserSearchResponse : undefined;
    const { data, isLoading } = useQuery<FavouriteBooksByUser[]>({
        queryKey: ["favouriteBooksByUser"],
        queryFn: GetFavouriteBooks,
    });

    const dataResponse = bookDataFromUserSearch ? bookDataFromUserSearch : data;

    if (isLoading) {
        return <>
            <Layout title="Favourites" className="mt-28">
                <BookSearch className="max-w-6xl" link="/favourites" mutationFunction={FindFavouriteBookByUser} />
                <div className="flex flex-col items-center  justify-center max-w-6xl mt-36 mx-auto">
                    <CircularProgress/>
                </div>
            </Layout>
        </>
    }

    return (
        <>
            <Layout title="Favourites" className="mt-28">
                <BookSearch className="max-w-5xl" link="/favourites" mutationFunction={FindFavouriteBookByUser} />
                <div className="flex flex-row justify-center max-w-5xl mt-8 mx-auto">
                    <BooksTableContent booksData={dataResponse} isFavouritePage={true} />
                </div>
            </Layout>
        </>
    );
};

export { Favourites };
