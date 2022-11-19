import React, { useContext, useState } from 'react';
import logo from "../assets/food-logo.png";
import avatar from "../assets/avatar-food.png";
import { BsCartPlusFill } from "react-icons/bs";
import SideBar from './SideBar';
import HeaderCartContext from '../context/HeaderCartContext';
import SideBarContext from '../context/SideBarContext';

function NavBar() {

    const { items } = useContext(HeaderCartContext);
    const { showSideBarfn } = useContext(SideBarContext);

    const [list, _setList] = useState([
        { item: "Home", id: 0},
        { item: "Menu", id: 1},
        { item: "About Us", id: 2},
        { item: "Service", id: 3},
    ]);


    return (
        <nav className='flex justify-around items-center sticky py-4 top-0 bg-primary z-10'>
            <a href='#' className='flex items-center gap-2'>
                <img className='w-10 rounded-full ' src={logo} alt="logo" />
                <h3 className='text-headingColor font-bold'>Food City</h3>
            </a>

            <ul className='hidden justify-around md:flex items-center gap-14'>
                {
                    list.map( ({item, id}) => (
                        <li className='text-textColor cursor-pointer hover:text-headingColor transition-all duration-1000' key={id}>{ item }</li>
                    ))
                }
            </ul>

            <div className='flex justify-around items-center gap-5'>
                
                <div className='relative cursor-pointer'>
                   <BsCartPlusFill className='text-2xl' />
                   
                  <div onClick={showSideBarfn} className='absolute text-sm -top-2 -right-2 bg-red-600 text-white text-center rounded-full w-6 h-6'>
                    {items.length}
                  </div>
                  
                </div>

                <img className='w-10' src={avatar} alt="avatar" />
            </div>

            <SideBar />

        </nav>
    );
}

export default NavBar;