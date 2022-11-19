import React, { useContext, useRef } from 'react';
import { BsArrowLeft } from "react-icons/bs";
import { FcClearFilters } from "react-icons/fc";
import CartEmpty from './CartEmpty';
import CartAvail from "./CartAvail";
import HeaderCartContext from '../context/HeaderCartContext';
import SideBarContext from '../context/SideBarContext';

function SideBar() {

    const {items, setItems} = useContext(HeaderCartContext);
    const {sidebar} = useContext(SideBarContext);

    const clearCart = () => {
        setItems([]);
    }

    const sideBarAnimation = [
        {transform: "translateX(0px)", opacity: 1},
        {transform: "translateX(1000px)", opacity: 0},
    ]

    const sideBarAnimationTiming = {
        duration: 1000,
        iterations: 1
    }

    const hideSideBar = () => {
        if (!sidebar.current.classList.contains("translate-x-full")) {
            sidebar.current.animate(sideBarAnimation, sideBarAnimationTiming);
            sidebar.current.classList.add("translate-x-full");
        }
    }

    return (
        <div ref={sidebar} className={`translate-x-full bg-white h-full md:w-[375px] w-full fixed top-0 right-0 z-20 drop-shadow-md`}>

            <div className='flex justify-around mt-6 items-center font-bold text-xl cursor-pointer'>
                <BsArrowLeft onClick={hideSideBar} className='inline-block' />
                <p>Cart</p>
                <p onClick={clearCart} className='bg-gray-100 shadow-xl text-center font-light rounded-xl p-2 active:shadow-md duration-500 active:scale-50'>
                    Clear <FcClearFilters className='inline-block' />
                </p>
            </div>

            {
                items.length > 0 ? <CartAvail /> : <CartEmpty />
            }

        </div>
    );
}

export default SideBar;