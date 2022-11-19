import emptycart from "../assets/emptyCart.svg"

const CartEmpty = () => {

    return (
        <div className='mt-32 flex justify-center items-center flex-col gap-4 font-bold text-2xl capitalize'>
            <h2>add some items to your cart </h2>
            <img className='w-40' src={emptycart} alt="image" />
        </div>
    );
}

export default CartEmpty;