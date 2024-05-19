//Connection to our backEnd
const ApiUrls = {
    Base:  "http://localhost:5242/api",
    Auth: {
        Login: () => `${ApiUrls.Base}/Auth`
    },
    Books: {
        GetBooks: () => `${ApiUrls.Base}/Books/GetBooks`,
        FindBook: () => `${ApiUrls.Base}/Books/FindBook`,
        GetFavouriteBooksByUser: () => `${ApiUrls.Base}/Books/GetFavouriteBooksByUser`,
        FindFavouriteBook: () => `${ApiUrls.Base}/Books/FindFavouriteBook`,
        AddBookToFavourite: () => `${ApiUrls.Base}/Books/AddBookToFavourite`,
        RemoveBookFromFavourites: () => `${ApiUrls.Base}/Books/RemoveBookFromFavourite`,
        UpdateBookAndBookRateByUser: () => `${ApiUrls.Base}/Books/UpdateBookAndBookRateByUser`,
    }
}

export { ApiUrls }
