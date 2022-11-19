import React, { useContext, useState } from 'react';
import logo from "../assets/food-logo.png";
import avatar from "../assets/avatar-food.png";
import { BsCartPlusFill } from "react-icons/bs";
import SideBar from './SideBar';
import HeaderCartContext from '../context/HeaderCartContext';
import SideBarContext from '../context/SideBarContext';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import AuthContext from '../context/AuthContext';

function NavBar() {

    const { items } = useContext(HeaderCartContext);
    const { showSideBarfn } = useContext(SideBarContext);
    const {currentUser} = useContext(AuthContext);

    const [list, _setList] = useState([
        { item: "Home", id: 0},
        { item: "Menu", id: 1},
        { item: "About Us", id: 2},
        { item: "Service", id: 3},
    ]);

    const navigate = useNavigate();

    const handleLogout = async () => {
        await signOut(auth);
        navigate("/login")
    }


    return (
        <div className='sticky bg-primary top-0 z-10 pb-4'>
            <nav className='flex justify-around items-center py-4'>
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

                    <p onClick={handleLogout} className='bg-orange-400 m-4 p-2 rounded-xl text-textColor cursor-pointer shadow-xl duration-500 active:scale-50 select-none'>
                        Logout
                    </p>
                </div>

                <SideBar />

            </nav>

            <div className='flex justify-center pt-1 pl-16 md:pl-28 flex-col'>
                <img className='w-14 h-14 rounded-full object-cover' src={currentUser.photoURL} alt="avatar" />
                <p>Welcome back, <span className='text-orange-400'>{currentUser.displayName}</span>.</p>
            </div>
        </div>
    );
}

export default NavBar;