import { useContext } from "react";
import { TiArrowBack, FcClearFilters } from "react-icons/all";
import NavContext from "../contexts/NavContext";

function Sidebar() {

    const {sidebar} = useContext(NavContext);

    return (
        <div ref={sidebar} className='bg-white fixed -right-full h-full w-[400px] top-0 z-20 drop-shadow-lg'>
            <div className="flex items-center justify-between px-8 mt-6">
                <TiArrowBack cursor="pointer" size={25} />
                <h2 className="text-xl font-semibold text-textColor">Cart</h2>
                <button className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md  cursor-pointer text-textColor text-base active:scale-75 duration-200">Clear <FcClearFilters /></button>
            </div>
        </div>
    );
}

export default Sidebar;