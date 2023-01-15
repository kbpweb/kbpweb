import {createSlice} from '@reduxjs/toolkit'
import {HYDRATE} from 'next-redux-wrapper'

export const cookieAccept = createSlice({
    name: 'USER_ACCEPTED_COOKIES',
    initialState: {
        value: false
    },
    reducers: {
        cookie_state: (state, action) => {
            state.value = action.payload
        },
    }
})

export const {cookie_state} = cookieAccept.actions

// export const setCookieState = (state) => state.cookie_state

export default cookieAccept.reducer