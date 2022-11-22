import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import SideBarContext from '../context/SideBarContext';

function MenuBar() {

    const {currentUser} = useContext(AuthContext);
    const {menubar} = useContext(SideBarContext);

    const menuBarAnimation = [
        {transform: "translateX(0px)", opacity: 1},
        {transform: "translateX(-1000px)", opacity: 0},
    ]

    const menuBarAnimationTiming = {
        duration: 1000,
        iterations: 1
    }

    const hideMenuBar = () => {
        if (!menubar.current.classList.contains("-translate-x-full")) {
            menubar.current.animate(menuBarAnimation, menuBarAnimationTiming);
            menubar.current.classList.add("-translate-x-full");
        }
    }


    return (
        <div ref={menubar} className='bg-orange-200 -translate-x-full h-full md:w-[375px] top-0 w-full fixed left-0 z-20 drop-shadow-md'>
            <div className='flex justify-center pt-1 pl-16 md:pl-28 flex-col'>
                <img className='w-14 h-14 rounded-full object-cover' src={currentUser.photoURL} alt="avatar" />
                <p>Welcome back, <span className='text-orange-400'>{currentUser.displayName}</span>.</p>
            </div>
            <p onClick={hideMenuBar}>Click</p>
        </div>
    );
}

export default MenuBar;