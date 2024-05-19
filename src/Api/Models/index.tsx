//we need to match our types in the backEnd and FrontEnd to keep consistency across apps.

export interface LoginModel {
    email: string;
    password?: string;
}

export interface LoginResponse {
    token: string;
    validTo: string;
}

export interface Book {
    id: number;
    title: string;
    author: string;
    rate: number;
    price: number;
    contributor: string;
    bookImage: string;
}

export interface SearchBook {
    userQuery: string;
}

export interface FavouriteBooksByUser {
    bookId: number;
    title: string;
    author: string;
    contributor: string;
    price: number;
    rate: number;
}
