/* eslint-disable no-param-reassign */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import storage from "../../common/storage";

export interface User {
    name: string;
    id: string;
}

export interface Token {
    access: {
        token: string;
        expires: Date;
    };
    refresh: {
        token: string;
        expires: Date;
    };
}

interface UserState {
    user: User | null;
    tokens: Token | null;
}

const initialState: UserState = {
    user: storage.get("user") || null,
    tokens: storage.get("tokens") || null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<any>) => {
            const { payload } = action;
            state.user = payload;
            storage.set("user", payload);
        },
        setTokens: (state, action: PayloadAction<any>) => {
            const { payload } = action;
            state.tokens = payload;
            storage.set("tokens", payload);
        },
    },
});

const { actions, reducer } = userSlice;

export const { setUser, setTokens } = actions;

export default reducer;
