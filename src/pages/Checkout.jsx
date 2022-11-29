import React, { useContext } from 'react';
import CheckoutContext from '../context/CheckoutContext';

function Checkout() {

    const {carts} = useContext(CheckoutContext);

    return (
        <div>
            {/* {
                carts[0]?.map(({price, img, id, title}) => (
                    <div key={id}>
                        <img src={img} alt="image" />
                        <p>{price}</p>
                        <p>{ title }</p>
                    </div>
                ))
            } */}
        </div>
    );
}

export default Checkout;