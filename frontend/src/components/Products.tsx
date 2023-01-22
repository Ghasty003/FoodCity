import React from 'react';
import lists from "../data/header-data";
import Card from "./Card";

function Products() {

    return (
        <div className='mt-32'>
            <div>
                <h2 className='capitalize text-headingColor font-bold text-2xl'>our fresh & healthy fruits</h2>
                <p className='w-32 h-1 rounded-xl bg-orange-500'></p>
            </div>

            <div className='w-full h-48 relative mt-16 overflow-y-hidden overflow-x-auto'>
                <div className='flex mt-4 desktop:w-[1120px]'>
                    {
                        lists.map(({id, title, description, price, img}) => (
                            <Card key={id} title={title} id={id} description={description} price={price} img={img} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Products;