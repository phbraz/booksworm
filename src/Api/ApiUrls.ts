//Connection to our backEnd
const ApiUrls = {
    Base:  "http://localhost:5242/api",
    Auth: {
        Login: () => `${ApiUrls.Base}/Auth`
    },
    Books: {
        SaveToFavourite: () => `${ApiUrls.Base}/Books/SaveBookToFavourite`,
        FetchFavourites: () => `${ApiUrls.Base}/Books/FavouriteBooksByUser`,
    }
}

export { ApiUrls }
