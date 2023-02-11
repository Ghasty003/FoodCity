import { type } from "os";
import React, { createContext, useReducer, useState, Reducer } from "react";

interface Prop {
    children: React.ReactNode;
}

enum Type {
    LOGIN = "LOGIN",
    LOGOUT = "LOGOUT"
}

interface User {
    user: object | null
}

interface ActionType {
    payload: object;
    type: Type
}

interface ContextType {
    dispatch: React.Dispatch<ActionType>;
    state: User;
}

const AuthContext = createContext<ContextType>(null!);


const authReducer: Reducer<User, ActionType> = (state, action) => {
    switch (action.type) {
        case Type.LOGOUT:
            return {
                user: null
            }

        case Type.LOGIN:
            return {
                user: action.payload
            }

        default:
            return state;
    }
}

const initialValue: User = {
    user: null
}

export const AuthContextProvider: React.FC<Prop> = ({ children }) => {

    const [state, dispatch] = useReducer(authReducer, initialValue);

    return (
        <AuthContext.Provider value={{dispatch, state}}>
            { children }
        </AuthContext.Provider>
    )
}


export default AuthContext;