import React, { createContext, useRef } from "react";
import { Navprops, Prop } from "../types/types";


const NavContext = createContext<Navprops>(null!);


export const NavContextProvider: React.FC<Prop> = ({ children }) => {

    const sideBarSlideOut = [
        {right: "-100%", opacity: 0},
        {right: "0", opacity: 1}
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


    return (
        <NavContext.Provider value={{openNav, sidebar}}>
            { children }
        </NavContext.Provider>
    )
}


export default NavContext;