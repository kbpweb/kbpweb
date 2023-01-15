import { Action, ThunkAction, configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";
import { cookieAccept } from "../reducer/reducers";
import { createWrapper } from "next-redux-wrapper";

export const store = () => configureStore({
    reducer: {
        [cookieAccept.name]: cookieAccept.reducer
    },
})

export const wrapper = createWrapper(store)