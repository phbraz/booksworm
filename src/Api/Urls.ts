//Connection to our backEnd

const Urls = {
    Base:  "http://localhost:5242/api",
    Auth: {
        Login: () => `${Urls.Base}/Auth`
    }
}

export { Urls }