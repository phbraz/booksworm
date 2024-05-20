import { Layout } from "../../Components/Core/Layout";
import { BookSearch } from "../../Components/BookSearch";
import { BooksTableContent } from "../../Components/Core/BooksTableContent";
import { FindFavouriteBookByUser, GetFavouriteBooks, RemoveBookFromFavourites } from "../../Api/Calls.tsx";
import { useMutation, useQuery } from "@tanstack/react-query";
import { BookResponse } from "../../API/Models";
import { CircularProgress } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { ToastMessage } from "../../Components/ToastMessage";

const Favourites = () => {
    const location = useLocation();
    const bookDataFromUserSearch: BookResponse[] = location.state?.bookUserSearchResponse ? location.state.bookUserSearchResponse : undefined;
    const [toastMessage, setToastMessage] = useState("");
    const [isToastMessageOpen, setIsToastMessageOpen] = useState(false);

    const handleToastClose = () => {
        setIsToastMessageOpen(false);
    }

    const { data, isLoading, refetch } = useQuery<BookResponse[]>({
        queryKey: ["favouriteBooksByUser"],
        queryFn: GetFavouriteBooks,
    });

    const removeBookMutation = useMutation({
        mutationFn: async (bookId: number) => {
            return await RemoveBookFromFavourites(bookId);
        },
        onSuccess: async () => {
            setToastMessage("Book removed successfully!");
            setIsToastMessageOpen(true);
            return await  refetch()
        },
        onError: () => {
            setToastMessage("Error removing book!");
            setIsToastMessageOpen(true);
        }
    });

    const dataResponse = bookDataFromUserSearch ? bookDataFromUserSearch : data;

    const handleDeleteSubmit = (book: BookResponse) => {
        removeBookMutation.mutate(book.id)
    }

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
                <ToastMessage isOpen={isToastMessageOpen} onClose={handleToastClose} message={toastMessage} />
                <BookSearch className="max-w-5xl" link="/favourites" mutationFunction={FindFavouriteBookByUser} />
                <div className="flex flex-row justify-center max-w-5xl mt-8 mx-auto">
                    <BooksTableContent booksData={dataResponse} isFavouritePage={true} onClick={(book) => handleDeleteSubmit(book)} />
                </div>
            </Layout>
        </>
    );
};

export { Favourites };
