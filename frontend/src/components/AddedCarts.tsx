import React from 'react';
import img from "../assets/f1.png";

const Div = () => {

    return (
        <div className='w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2'>
            <div className='flex items-center text-white gap-3'>
                <img className='w-20 h-20' src={img} alt="" />
                <div className=''>
                    <p className='text-lg'>Header</p>
                    <p>$ price</p>
                </div>
            </div>
        </div>
    );
}

function AddedCarts() {
    return (
        <div className='w-full h-full bg-cartBg rounded-t-[2rem] mt-4'>
            <div className='w-full h-[340px] px-6 py-10 flex flex-col gap-3 overflow-y-auto'>
                <Div />
                <Div />
                <Div />
                <Div />
                <Div />
                <Div />
                <Div />
                <Div />
            </div>

            <div className='bg-cartItem rounded-t-[2rem] fixed bottom-0 w-full px-8'>
                <div className='flex justify-between text-lg text-gray-400 mt-6'>
                    <p className=''>Sub Total</p>
                    <p>$ 0</p>
                </div>
                <div className='flex justify-between text-lg text-gray-400'>
                    <p>Delivery</p>
                    <p>$ 0</p>
                </div>

                <div className='border-b border-gray-600 my-2'></div>

                <div className='flex justify-between text-xl text-white'>
                    <p>Total</p>
                    <p>$ 200</p>
                </div>

                <button className='w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg active:scale-75 duration-300'>
                    Proceed to checkout
                </button>
            </div>
        </div>
    );
}

export default AddedCarts;