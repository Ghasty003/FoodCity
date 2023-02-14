import { useContext, useEffect } from "react";
import { TiArrowBack, FcClearFilters } from "react-icons/all";
import CartContext from "../contexts/CartContext";
import NavContext from "../contexts/NavContext";
import AddedCarts from "./AddedCarts";
import CartEmpty from "./CartEmpty";

function Sidebar() {

    const {sidebar, closeNav, cart} = useContext(NavContext);

    const { cartItem, setCartItem } = useContext(CartContext);

    useEffect(() => {
        document.addEventListener("click", (e) => {
            const event = e.target as HTMLElement;
            if (!sidebar.current.contains(event) && !cart.current.contains(event) 
            && !sidebar.current.classList.contains("-right-[500px]")) {
                closeNav();
            }
        })
    }, []);

    return (
        <div ref={sidebar} className='bg-white fixed w-full -right-[500px] h-full sm:w-[400px] top-0 z-20 drop-shadow-lg'>
            <div className="flex items-center justify-between px-8 mt-4">
                <TiArrowBack onClick={closeNav} cursor="pointer" size={25} />
                <h2 className="text-xl font-semibold text-textColor">Cart</h2>
                <button onClick={() => setCartItem([])} className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md  cursor-pointer text-textColor text-base active:scale-75 duration-200">Clear <FcClearFilters /></button>
            </div>
            {
                cartItem.length > 0 ? <AddedCarts /> : <CartEmpty />
            }
        </div>
    );
}

export default Sidebar;