import React, { useContext } from "react";
import { FaHamburger } from "react-icons/all"
import RendererContext from "../contexts/RendererContext";

const Div: React.FC<{text: string}> = ({text}) => {
    const { updateRenderer } = useContext(RendererContext);

    return (
        <div onClick={() => updateRenderer(text)} className='group mx-10 my-6 bg-card w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-cartNumBg duration-300 active:scale-75'>
            <div className='w-10 h-10 rounded-full shadow-lg bg-cartNumBg group-hover:bg-white flex items-center justify-center'>
                <FaHamburger className="text-white text-lg group-hover:text-textColor" />
            </div>
            <p className='text-sm text-textColor group-hover:text-white'>{ text }</p>
        </div>
    )
}

function DishesHeader() {

    const { state } = useContext(RendererContext);

    return (
        <div className='mt-32'>
            <div>
                <h2 className='capitalize text-headingColor font-bold text-2xl'>Our Hot Dishes</h2>
                <p className='w-32 h-1 rounded-xl bg-orange-500'></p>
            </div>

            <div className='w-full flex justify-center relative mt-10 overflow-x-auto scrollbar-hide sm:overflow-x-hidden'>
                <div className='flex w-full ml-8'>
                    <Div text={"Chicken"} />
                    <Div text="Curry" />
                    <Div text="Rice" />
                    <Div text="Fish" />
                    <Div text="Fruit" />
                    <Div text="Ice cream" />
                </div>
            </div>

            { state }
        </div>
    );
}

export default DishesHeader;