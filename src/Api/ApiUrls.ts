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
    }
}

export { ApiUrls }
