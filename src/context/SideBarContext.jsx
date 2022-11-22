import { createContext, useRef, useState } from "react";

const SideBarContext = createContext();

export const SideBarContextProvider = ({children}) => {

    const sidebar = useRef("");
    const menubar = useRef("");

    const sideBarAnimation = [
        {transform: "translateX(100%)", opacity: 0},
        {transform: "translateX(0)", opacity: 1},
    ]

    const sideBarAnimationTiming = {
        duration: 500,
        iterations: 1
    }

    
    const showSideBarfn = () => {
        if (sidebar.current.classList.contains("translate-x-full")) {
            sidebar.current.animate(sideBarAnimation, sideBarAnimationTiming);
            sidebar.current.classList.remove("translate-x-full");
        }
    }
    
    const menuBarAnimation = [
        {transform: "translateX(-400px)", opacity: 0},
        {transform: "translateX(0)", opacity: 1},
    ]

    const menuBarAnimationTiming = {
        duration: 500,
        iterations: 1
    }

    const showMenuBar = () => {
        if (menubar.current.classList.contains("-translate-x-full")) {
            menubar.current.animate(menuBarAnimation, menuBarAnimationTiming);
            menubar.current.classList.remove("-translate-x-full");
        }
    }
    return (
        <SideBarContext.Provider value={{ sidebar, showSideBarfn, menubar, showMenuBar}} >
            {children}
        </SideBarContext.Provider>
    )
}

export default SideBarContext;