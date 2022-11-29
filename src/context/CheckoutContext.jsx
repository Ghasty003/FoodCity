import { doc, onSnapshot } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../../firebase";
import AuthContext from "./AuthContext";


const CheckoutContext = createContext();

export const CheckoutContextProvider = ({children}) => {

    const [carts, setCarts] = useState([]);
    const {currentUser} = useContext(AuthContext);

    useEffect(() => {

        const getCarts = () => {
            const unsub = onSnapshot(doc(db, "usersCart", currentUser.uid), (snapshot) => {
                setCarts([snapshot.data().carts])
            });
        
            return () => {
                unsub();
            } 
        }

        currentUser.uid && getCarts();

    }, [currentUser?.uid]);

//    carts[0]?.forEach(ele => {
//     console.log(ele.img)
//    })

    return (
        <CheckoutContext.Provider value={{ carts }}>
            {children}
        </CheckoutContext.Provider>
    )
}

export default CheckoutContext;