import { Layout } from "../../Components/Core/Layout";
import { BookSearch } from "../../Components/BookSearch";
import { BooksTableContent } from "../../Components/Core/BooksTableContent";
import { BooksData } from "../../Helpers/Interface.tsx";
import { useMutation } from "@tanstack/react-query";
import { LoginModel } from "../../API/Models";
import { ApiUrls } from "../../Api/ApiUrls.ts";
import { getCookie, getUserNameFromCookie, validateWebApiCookie } from "../../Helpers/User.tsx";
import { useEffect, useState } from "react";

const Favourites = () => {
    const token = validateWebApiCookie() ? getCookie() : null;
    const [favouriteBooks, setFavouriteBooks] = useState<BooksData[]>([]);

    const favouritesMutation = useMutation({
        mutationFn: async (loginModel: LoginModel) => {
            const response = await fetch(`${ApiUrls.Books.FetchFavourites()}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(loginModel),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Directly return parsed JSON
        },
        onSuccess: (dataResponse: BooksData[]) => {
            setFavouriteBooks(dataResponse);
            console.log(dataResponse);
        },
        onError: (error) => {
            console.error('Error fetching favourites:', error);
        }
    });

    useEffect(() => {
        const loginModel: LoginModel = {
            email: getUserNameFromCookie() ?? ""
        };
        favouritesMutation.mutate(loginModel);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Only run once on mount

    return (
        <>
            <Layout title="Favourites">
                <BookSearch className="max-w-5xl" />
                <div className="flex flex-row justify-center max-w-5xl mt-8 mx-auto">
                    <BooksTableContent booksData={favouriteBooks} isFavouritePage={true} />
                </div>
            </Layout>
        </>
    );
};

export { Favourites };
