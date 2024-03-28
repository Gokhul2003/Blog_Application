
//since the logic is already wirttem in appwrite so here
// we're only writing the authentication access
//also store the user data

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
    }
})
//authslice.actions means auth lsice ke andr ke function ka access..


export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
