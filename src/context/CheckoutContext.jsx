import { doc, onSnapshot } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../../firebase";
import AuthContext from "./AuthContext";


const CheckoutContext = createContext();

export const CheckoutContextProvider = ({children}) => {

    const [carts, setCarts] = useState([]);
    const {currentUser} = useContext(AuthContext);

    useEffect(() => {

        // const unsub = onSnapshot(doc(db, "usersCart", currentUser.uid), (res) => {
        //     setCarts([...res.data().carts])
        // });

        // return () => {
        //     unsub();
        // }

    }, []);

    // console.log(carts)

    return (
        <CheckoutContext.Provider value={{carts}}>
            {children}
        </CheckoutContext.Provider>
    )
}

export default CheckoutContext;