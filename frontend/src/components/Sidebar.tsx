import { useContext, useEffect } from "react";
import { TiArrowBack, FcClearFilters } from "react-icons/all";
import NavContext from "../contexts/NavContext";
import AddedCarts from "./AddedCarts";
import CartEmpty from "./CartEmpty";

function Sidebar() {

    const {sidebar, closeNav, cart} = useContext(NavContext);

    useEffect(() => {
        document.addEventListener("click", (e) => {
            const event = e.target as HTMLElement;
            if (!sidebar.current.contains(event) && !cart.current.contains(event) 
            && !sidebar.current.classList.contains("-right-full")) {
                closeNav();
            }
        })
    }, []);

    return (
        <div ref={sidebar} className='bg-white fixed -right-full h-full w-[400px] top-0 z-20 drop-shadow-lg'>
            <div className="flex items-center justify-between px-8 mt-4">
                <TiArrowBack onClick={closeNav} cursor="pointer" size={25} />
                <h2 className="text-xl font-semibold text-textColor">Cart</h2>
                <button className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md  cursor-pointer text-textColor text-base active:scale-75 duration-200">Clear <FcClearFilters /></button>
            </div>
            {/* <CartEmpty /> */}
            <AddedCarts />
        </div>
    );
}

export default Sidebar;