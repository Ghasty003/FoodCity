import { useContext, useReducer } from "react";
import { Link } from "react-router-dom";
import HeaderCartContext from "../context/HeaderCartContext";


const CartAvail = () => {

    const {items} = useContext(HeaderCartContext);

    return (
        <>
            <div className='bg-cartBg overflow-auto absolute bottom-0 left-0 right-0 h-[85%] rounded-tr-3xl rounded-tl-3xl'>

                <div className='absolute top-6 w-[90%] ml-4'>
    
                    {
                        items.map(({title, price, img, id}) => (
                            <div key={id} className="w-full last:mb-[200px] m-2">
                                <div className='flex justify-between p-2 rounded items-center bg-cartItem w-full'>
                                    <div className='flex justify-between gap-1 items-center'>
                                        <img className='w-16' src={img} alt="image" />
                                        <div className='text-white'>
                                            <h3>{title}</h3>
                                            <p>$ {price}</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-around items-center gap-2 text-center text-lg text-white'>
                                        <p className='cursor-pointer text-3xl'>-</p>
                                        <p>0</p>
                                        <p className='cursor-pointer'>+</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
            
                </div>

            </div>
            <div className='bg-cartTotal fixed bottom-0 w-full rounded-tr-3xl rounded-tl-3xl p-4'>
                <div className='flex justify-between text-gray-400 text-xl'>
                    <p>Sub Total</p>
                    <p>$ </p>
                </div>

                <div className='flex justify-between text-gray-400 text-xl mt-1'>
                    <p>Delivery</p>
                    <p>$ </p>
                </div>

                <div className='border-b border-gray-600 my-2'></div>

                <div className='flex justify-between text-white font-bold text-xl'>
                    <p>Total</p>
                    <p>$ </p>
                </div>

                <div>
                    <Link to="/checkout">
                    <p className='capitalize w-[90%] mx-4 bg-orange-500 p-2 rounded-3xl text-white text-center my-2'>Continue to checkout</p>
                    </Link>
                </div>
            </div>
        </>
    );
}


export default CartAvail;