import { ApiUrls } from "./ApiUrls.ts";
import { getCookie } from "../Helpers/User.tsx";
import { SearchBook } from "./Models";

export const FetchAllBooks = async () => {
    const token = getCookie();
    const response = await fetch(`${ApiUrls.Books.GetBooks()}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        }
    })
    if (!response.ok) {
        throw new Error(`Failed to fetch books from API: ${response.status}`);
    }

    return await response.json();
}

export const FindBook = async (userInput: string) => {
    const token = getCookie();
    const bodyReq: SearchBook = {
        userQuery: userInput,
    }
    const response = await fetch(`${ApiUrls.Books.FindBook()}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(bodyReq),
    })
    if (!response.ok) {
        throw new Error(`Failed to fetch books from API: ${response.status}`);
    }

    return await response.json();
}

export const GetFavouriteBooks = async () => {
    const token = getCookie();
    const response = await fetch(`${ApiUrls.Books.GetFavouriteBooksByUser()}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        }
    });
    if (!response.ok) {
        throw new Error(`Failed to fetch books from API: ${response.status}`);
    }

    return await response.json();
}

