import { useSelector } from "react-redux";
import { cookieAccept } from "../reducer/reducers";

export const useCookieState = () => {
    return useSelector(state => state.USER_ACCEPTED_COOKIES.value)
}