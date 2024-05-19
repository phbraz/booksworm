import { Layout } from "../../Components/Core/Layout";
import { BookSearch } from "../../Components/BookSearch";
import { BooksTableContent } from "../../Components/Core/BooksTableContent";
import { BooksData } from "../../Helpers/Interface.tsx";
import { useMutation } from "@tanstack/react-query";
import { SaveBookToFavourite } from "../../API/Models";
import { ApiUrls } from "../../API/ApiUrls.ts";
import { getCookie, getUserNameFromCookie, validateWebApiCookie } from "../../Helpers/User.tsx";
import { ToastMessage } from "../../Components/ToastMessage";
import { useState } from "react";


const BestSeller = () => {
    //fetch from API
    const testBookLoad: BooksData[] = [
        {price: 10, rate: 5, title: "book1", author: "author 1", isFavourite: false},
        {price: 15, rate: 3, title: "book2", author: "author 2", isFavourite: false},
        {price: 5, rate: 2, title: "book3", author: "author 2", isFavourite: false},
    ]

    const token = validateWebApiCookie() ? getCookie() : null;
    const [isOpen, setIsOpen] = useState(false);
    const [booksData, setBooksData] = useState<BooksData[]>(testBookLoad);


    const displayToast = () => {
        setIsOpen(true);
    };

    const closeToast = () => {
        setIsOpen(false);
    }

    const saveToFavouriteMutation = useMutation({
        mutationFn: async (saveToFavourite: SaveBookToFavourite) => {
            return await fetch(`${ApiUrls.Books.SaveToFavourite()}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(saveToFavourite),
            })
        },
        onSuccess: async data => {
            const dataResponse: BooksData = await data.json();
            setBooksData(prevState =>
                prevState.map(book =>
                    book.title === dataResponse.title ? { ...book, isFavourite: true } : book
                ));
            displayToast();

            return <ToastMessage isOpen={isOpen} onClose={closeToast} message="Saved successfully." />
        },
        onError: () => {
            displayToast();
            return <ToastMessage isOpen={isOpen} onClose={closeToast} message="Something happened" />
        }
    })

    const handleSubmit = (event: BooksData) => {
        const saveBookToFavourite: SaveBookToFavourite = {
            title: event.title,
            author: event.author,
            price: event.price,
            rate: event.rate,
            isFavourite: event.isFavourite,
            userEmail: getUserNameFromCookie() ?? ""
        }

        saveToFavouriteMutation.mutate(saveBookToFavourite);
    }

    return (
        <>
            <Layout
                title="New York Times BestSellers"
            >
                <BookSearch className="max-w-5xl" />
                <div className="flex flex-row justify-center max-w-5xl mt-8 mx-auto">
                    <BooksTableContent booksData={booksData} onClick={(event) => {handleSubmit(event)}} />
                </div>
            </Layout>
        </>
    )

}

export { BestSeller }
