import cookie from "cookie"
import { jwtDecode } from "jwt-decode";
import { cookieEnum } from "./String.tsx";


//here we are going to handle the users token and ensure it's matching to the API server
const getCookie = (name: string) => {

    const cookies = cookie.parse(document.cookie);
    return cookies[name]
}

const validateJwt = (token: string) => {
    try {
        const jwtPayload = jwtDecode(token)
        if (jwtPayload.iss === "BookWorms") {
            return true;
        }
    } catch (e) {
        console.error(e);
        return false;
    }
}

const validateWebApiCookie = () => {
    const webApiCookie = getCookie(cookieEnum.booksApi);

    if (webApiCookie) {
        const isValidJwt = validateJwt(webApiCookie);
        if (isValidJwt) {
            return true;
        }
    }
    return false;
}

export { validateWebApiCookie, getCookie };
