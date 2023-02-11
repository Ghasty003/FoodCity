import React from "react";

export enum Type {
    LOGIN = "LOGIN",
    LOGOUT = "LOGOUT"
}

export interface Prop {
    children: React.ReactNode;
}

export interface User {
    user: object | null
}

export interface ActionType {
    payload: object;
    type: Type
}

export interface ContextType {
    dispatch: React.Dispatch<ActionType>;
    user: object | null
}