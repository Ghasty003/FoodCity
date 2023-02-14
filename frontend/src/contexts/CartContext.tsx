import React, { createContext, useState } from 'react';
import { CardProps, CartContextProps, Prop } from '../types/types';


const CartContext = createContext<CartContextProps>(null!);


export const CartContextProvider: React.FC<Prop> = ({ children }) => {

    const [cartItem, setCartItem] = useState<CardProps[]>([]);

    const addItemToCart = (title: string, description: string, price: string, img: string, id: number) => {
        if (cartItem.find(item => item.title == title && item.description == description)) {
            console.log("item already exists");
            return;
        }
        
        setCartItem(prev => (
            [...prev, {
                id,
                description,
                title,
                img,
                price
            }]
        ))
    }

    return (
        <CartContext.Provider value={{addItemToCart, cartItem, setCartItem}}>
            { children }
        </CartContext.Provider>
    )
}


export default CartContext;