import React from 'react';

function Dishes() {
    return (
        <div className='bg-cartNumBg w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-cartNumBg'>
            <div className='w-10 h-10 rounded-full shadow-lg bg-white group-hover:bg-white flex items-center justify-center'>
                
            </div>
            <p className='text-sm text-white group-hover:text-white'>Chicken</p>
        </div>
    );
}

export default Dishes;