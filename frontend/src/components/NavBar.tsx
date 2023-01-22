import React from 'react';
import { BsCartPlusFill } from "react-icons/bs";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { Link } from 'react-router-dom';


const Links: React.FC = () => {
    return (
        <Link to={""} className='text-textColor cursor-pointer hover:text-headingColor transition-all duration-1000'>
            {"J"}
        </Link>
    )
}


function NavBar() {
    return (
        <div className='sticky bg-primary top-0 z-10 pb-2'>
            <nav className='flex justify-around items-center py-4'>
                <a href='#' className='flex items-center gap-2'>
                    <img className='w-10 rounded-full ' src={"logo"} alt="logo" />
                    <h3 className='text-headingColor font-bold'>Food City</h3>
                </a>

                <ul className='hidden justify-around md:flex items-center gap-14'>
                    <Links />
                </ul>

                <div className='flex justify-around items-center gap-5'>
                    
                    <div className='relative cursor-pointer'>
                    <BsCartPlusFill className='text-2xl' />
                    
                    <div className='absolute text-sm -top-2 -right-2 bg-red-600 text-white text-center rounded-full w-6 h-6'>
                        0
                    </div>
                    
                    </div>

                    <p className='m-4 p-2 text-2xl text-textColor cursor-pointer'>
                        <HiOutlineBars3BottomRight />
                    </p>
                </div>

            </nav>
        </div>
    );
}

export default NavBar;