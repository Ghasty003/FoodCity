import React, { createContext, useState } from "react";
import { Prop, RendererProps } from "../types/types";
import Chicken from "../components/Chicken";
import Curry from "../components/Curry";
import Rice from "../components/Rice";
import Fish from "../components/Fish";
import Fruit from "../components/Fruit";

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
        } else if (text.toLocaleLowerCase() == "fish") {
            setState(<Fish />)
        } else if (text.toLocaleLowerCase() == "fruit") {
            setState(<Fruit />);
        }
    }
    
    return (
        <RendererContext.Provider value={{state, setState, updateRenderer}}>
            { children }
        </RendererContext.Provider>
    )
}


export default RendererContext;