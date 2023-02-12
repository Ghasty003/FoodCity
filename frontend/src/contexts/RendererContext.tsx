import React, { createContext, useState } from "react";
import { Prop, RendererProps } from "../types/types";
import Chicken from "../components/Chicken";
import Curry from "../components/Curry";
import Rice from "../components/Rice";

const RendererContext = createContext<RendererProps>(null!);


export const RendererContextProvider: React.FC<Prop> = ({ children }) => {

    const [state, setState] = useState(<Chicken />);

    const updateRenderer = (text: string) => {
        if (text.toLocaleLowerCase() == "chicken") {
            setState(<Chicken />)
        } else if (text.toLocaleLowerCase() == "curry") {
            setState(<Curry />)
        } else if (text.toLocaleLowerCase() == "rice") {
            setState(<Rice />)
        }
    }
    
    return (
        <RendererContext.Provider value={{state, setState, updateRenderer}}>
            { children }
        </RendererContext.Provider>
    )
}


export default RendererContext;