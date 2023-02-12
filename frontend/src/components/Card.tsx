import React from 'react';
import { BsCartPlusFill } from "react-icons/bs";
import { CardProps } from "../types/types";

function Card({price, title, description, img}: CardProps) {
    return (
        <div className='bg-cardOverlay backdrop-blur-lg hover:drop-shadow-lg h-40 w-[280px] rounded-xl relative p-4 mx-5'>
            <img className='w-[128px] hover:scale-[1.2] duration-300 absolute -top-5 left-4' src={img} alt="image" />
            <div className='flex flex-col items-end justify-end'>
                <span className='bg-red-600 p-2 mt-2 rounded-full text-center cursor-pointer'>
                    <BsCartPlusFill className='text-white text-lg' />
                </span>
                <div className='absolute bottom-2 flex flex-col items-end '>
                    <h3 className='text-headingColor font-bold text-xl'>{ title }</h3>
                    <p className='text-textColor text-sm my-1'>{ description }</p>
                    <p className='font-bold'><span className='text-red-500 mr-1'>$</span>{ price }</p>
                </div>
            </div>
        </div>
    );
}

export default Card;