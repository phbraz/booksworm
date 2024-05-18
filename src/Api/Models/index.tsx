//we need to match our types in the backEnd and FrontEnd to keep consistency across apps.

export interface LoginModel {
    email: string;
    password: string;
}

export interface LoginResponse {
    token: string;
    validTo: string;
}

export interface SaveBookToFavourite {
    title: string;
    author: string;
    rate: number;
    price: number;
    isFavourite: boolean;
    userEmail: string;
}
