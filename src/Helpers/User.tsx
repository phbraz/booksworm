import cookie from "cookie"
import { jwtDecode } from "jwt-decode";
import { cookieEnum } from "./String.tsx";


//here we are going to handle the users token and ensure it's matching to the API server
const getCookie = () => {
    const cookies = cookie.parse(document.cookie);
    return cookies[cookieEnum.booksApi];
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
    const webApiCookie = getCookie();

    if (webApiCookie) {
        const isValidJwt = validateJwt(webApiCookie);
        if (isValidJwt) {
            return true;
        }
    }
    return false;
}

const getUserNameFromCookie = () => {

    try {
        const isTokenValid = validateWebApiCookie();
        const token = isTokenValid ? getCookie() : "";
        const jwtPayload = jwtDecode(token);

        return jwtPayload.sub

    } catch (e) {
        console.error(e);
    }
}

export { validateWebApiCookie, getCookie, getUserNameFromCookie };
