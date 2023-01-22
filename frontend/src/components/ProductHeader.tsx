import React from 'react';
import bike from "../assets/delivery.png";
import ice1 from "../assets/i1.png";
import ice2 from "../assets/f1.png";
import ice3 from "../assets/fi1.png";
import ice4 from "../assets/food3.png";

interface Props {
    headingText: string;
    price: string;
    paragText: string;
    img: string
}

const Div: React.FC<Props> = ({ headingText, price, paragText, img }) => {

    return (
        <div className='bg-cardOverlay flex justify-center items-center flex-col drop-shadow-lg backdrop-blur-md w-40 md:w-[190px] rounded-3xl px-2 relative my-10'>
            <img className='w-[120px] absolute -top-10' src={img} alt="image" />
            <h2 className='text-headingColor text-xl mt-[72px]'>{ headingText }</h2>
            <p className='text-textColor text-sm my-2'>{ paragText }</p>
            <p className='text-sm font-bold my-2'><span className='text-red-500'>$</span>{ price }</p>
        </div>
    )
}

function ProductHeader() {
    return (
        <div className='flex justify-between md:flex-row w-[100%] flex-col mt-[100px]'>

            <div className='flex flex-col items-start w-80 p-2'>

                <p className='bg-orange-100 w-40 rounded-xl p-3 whitespace-nowrap'>
                    <span className='text-orange-500 font-bold pr-2'>Bike Delivery</span>
                    <img className='w-8 inline-block rounded-full bg-white mr-2' src={bike} alt="image" />
                </p>

                <h2 className='capitalize text-4xl md:text-[58px] font-bold leading-[60px] md:leading-[80px] text-headingColor my-6'>
                    the fastest delivery in <span className='text-orange-500'>your city.</span>
                </h2>

                <p className='my-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima velit eaque fugit distinctio est nam voluptatum architecto, porro iusto deserunt recusandae ipsa minus eos sunt, dolores illo repellat facere suscipit!
                </p>

                <button className='capitalize hover:shadow-xl ml-[30%] md:ml-0 duration-500 active:scale-50 text-white bg-orange-500 rounded-xl p-2 text-center'>order now</button>
            </div>

            <div className='heroBg w-[100%] md:mt-0 mt-10 flex flex-wrap flex-row md:flex-col justify-around p-4 rounded-xl md:w-80'>
                <Div img={ice1} headingText="Icecream" paragText="Chocolate & vanilla" price='5.25' />
                <Div img={ice2} headingText="Strawberries" paragText="Fresh Strawberries" price='10.25' />
                <Div img={ice4} headingText="Chicken Kebab" paragText="Mixed Kebab Plate" price='8.25' />
                <Div img={ice3} headingText="Fish Kebab" paragText="Mixed Fish Kebab" price='5.25' />
            </div>
        </div>
    );
}

export default ProductHeader;