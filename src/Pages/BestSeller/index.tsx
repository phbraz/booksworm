import { Layout } from "../../Components/Core/Layout";
import { BookSearch } from "../../Components/BookSearch";
import { BooksTableContent } from "../../Components/Core/BooksTableContent";
import { useLocation } from "react-router-dom";
import { BookResponse } from "../../Api/Models";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AddBookToFavouriteBook, FetchAllBooks, FindBook } from "../../Api/Calls.tsx";
import { CircularProgress } from "@mui/material";


const BestSeller = () => {
    const location = useLocation();
    const bookDataFromUserSearch: BookResponse[] = location.state?.bookUserSearchResponse ? location.state.bookUserSearchResponse : undefined;

    //fetching data from DB.
    const { data, isLoading, refetch } = useQuery<BookResponse[]>({
        queryKey: ["GetAllBooks"],
        queryFn: FetchAllBooks,
    })

    const addToFavouriteMutation = useMutation({
        mutationFn: async (bookId: number) => {
            return await AddBookToFavouriteBook(bookId);
        },
        onSuccess: async () => {
            console.log("it worked");
            return await refetch()
        },
        onError: (e) => {
            console.log("it failed");
            console.error(e);
        }
    })

    const dataResponse = bookDataFromUserSearch ? bookDataFromUserSearch : data;

    const handleSubmit = (event: BookResponse) => {
        addToFavouriteMutation.mutate(event.id);
    }

    if (isLoading) {
        return <>
            <Layout className="mt-20">
                <BookSearch className="max-w-6xl" link="/bestseller" mutationFunction={FindBook} />
                <div className="flex flex-col items-center  justify-center max-w-6xl mt-36 mx-auto">
                    <CircularProgress/>
                </div>
            </Layout>
        </>

    }

    return (
        <>
            <Layout
                title="New York Times BestSellers"
                className="mt-28 pb-8"
            >
                <BookSearch className="max-w-5xl" link="/bestseller" mutationFunction={FindBook} />
                <div className="flex flex-row justify-center max-w-5xl mt-8 mx-auto">
                    <BooksTableContent booksData={dataResponse!} onClick={(event) => {handleSubmit(event)}} />
                </div>
            </Layout>
        </>
    )

}

export { BestSeller }
