import { createContext, useRef, useState } from "react";

const SideBarContext = createContext();

export const SideBarContextProvider = ({children}) => {

    const sidebar = useRef("");

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

    return (
        <SideBarContext.Provider value={{ sidebar, showSideBarfn }} >
            {children}
        </SideBarContext.Provider>
    )
}

export default SideBarContext;