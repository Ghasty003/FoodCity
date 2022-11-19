import { createContext, useState } from "react";

const HeaderCartContext = createContext();

export const HeaderCartContextProvider = ({children}) => {

    const [items, setItems] = useState([]);

    const addToCart = (title, price, img, id, description) => {
        setItems(prevItems => [...prevItems, {title, price, img, id, description}]);
    }

    return (
        <HeaderCartContext.Provider value={{ items, addToCart, setItems }} >
            {children}
        </HeaderCartContext.Provider>
    )
}

export default HeaderCartContext;