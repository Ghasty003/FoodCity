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
    state: User;
}

export interface CardProps {
    id: number;
    price: string;
    title: string;
    description: string;
    img: string;
}

export interface RendererProps {
    state: JSX.Element;
    setState: React.Dispatch<React.SetStateAction<JSX.Element>>;
    updateRenderer: (text: string) => void;
}

export interface Navprops {
    openNav: () => void;
    sidebar: React.MutableRefObject<HTMLDivElement>;
    cart: React.MutableRefObject<HTMLDivElement>;
    closeNav: () => void;
}


export interface CartContextProps {
    addItemToCart: (title: string, description: string, price: string, img: string, id: number) => void;
    cartItem: CardProps[];
    setCartItem: React.Dispatch<React.SetStateAction<CardProps[]>>;
}