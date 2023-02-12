import React, { createContext, useRef } from "react";
import { Navprops, Prop } from "../types/types";


const NavContext = createContext<Navprops>(null!);


export const NavContextProvider: React.FC<Prop> = ({ children }) => {

    const sideBarSlideOut = [
        {right: "-100%", opacity: 0},
        {right: "0", opacity: 1}
    ]

    const sideBarSlideIn = [
        {right: "0", opacity: 1},
        {right: "-100%", opacity: 0}
    ]

    const sideBarAnimationOption = {
        duration: 600,
        iterations: 1,
        ease: "ease"
    }

    const sidebar = useRef<HTMLDivElement>(null!);

    const openNav = () => {
        sidebar.current.animate(sideBarSlideOut, sideBarAnimationOption);
        sidebar.current.classList.replace("-right-full", "right-0");
    }

    const closeNav = () => {
        sidebar.current.animate(sideBarSlideIn, sideBarAnimationOption);
        sidebar.current.classList.replace("right-0", "-right-full");
    }

    return (
        <NavContext.Provider value={{openNav, sidebar, closeNav}}>
            { children }
        </NavContext.Provider>
    )
}


export default NavContext;