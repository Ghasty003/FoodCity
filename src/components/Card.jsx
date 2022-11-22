import { arrayUnion, doc, setDoc, updateDoc } from "firebase/firestore";
import { useContext } from "react";
import { BsCartPlusFill } from "react-icons/bs";
import { db } from "../../firebase";
import HeaderCartContext from "../context/HeaderCartContext";
import AuthContext from "../context/AuthContext";
import CheckoutContext from "../context/CheckoutContext";

const Card = ({id, price, title, description, img}) => {

    const {currentUser} = useContext(AuthContext)

    const {addToCart} = useContext(HeaderCartContext);
    const {addToCheckout} = useContext(CheckoutContext);

    const handleClick = async () => {
        addToCart(title, price, img, id, description);

        // Add items to database cart
        await updateDoc(doc(db, "usersCart", currentUser.uid), {
            carts: arrayUnion({
                id,
                price,
                img,
                title,
                description
            })
        });
    }

    return (

        <div className='bg-cardOverlay backdrop-blur-lg hover:drop-shadow-lg h-40 w-[280px] rounded-xl relative p-4 mx-5'>
            <img className='w-[128px] hover:scale-[1.2] duration-300 absolute -top-5 left-4' src={img} alt="image" />
            <div className='flex flex-col items-end justify-end'>
                <span className='bg-red-600 p-2 mt-2 rounded-full text-center cursor-pointer'>
                    <BsCartPlusFill onClick={handleClick} className='text-white text-lg' />
                </span>
                <div className='absolute bottom-2 flex flex-col items-end '>
                    <h3 className='text-headingColor font-bold text-xl'>{ title }</h3>
                    <p className='text-textColor text-sm my-1'>{ description }</p>
                    <p className='font-bold'><span className='text-red-500 mr-1'>$</span>{ price }</p>
                </div>
            </div>
        </div>
    );
}


export default Card;