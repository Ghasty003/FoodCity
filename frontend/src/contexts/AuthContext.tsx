import React, { createContext, useReducer, useEffect, Reducer } from "react";
import {ActionType, ContextType, Type, Prop, User} from "../types/types";

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

    useEffect(() => {
        const user = localStorage.getItem("user");

        if (user) {
            dispatch({type: Type.LOGIN, payload: JSON.parse(user)});
        }
    }, []);
 
    return (
        <AuthContext.Provider value={{dispatch, state}}>
            { children }
        </AuthContext.Provider>
    )
}


export default AuthContext;