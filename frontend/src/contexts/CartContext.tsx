import React, { createContext } from 'react';
import { CartContextProps, Prop } from '../types/types';


const CartContext = createContext<CartContextProps>(null!);


export const CartContextProvider: React.FC<Prop> = ({ children }) => {

    const addItemToCart = (title: string, description: string, price: string, img: string, id: number) => {
        console.log(title, description, img, price, id);
    }

    return (
        <CartContext.Provider value={{addItemToCart}}>
            { children }
        </CartContext.Provider>
    )
}


export default CartContext;