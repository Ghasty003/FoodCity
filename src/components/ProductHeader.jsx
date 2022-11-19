import React, { useRef } from 'react';
import lists from '../data/header-data';
import Card from './Card';

function ProductHeader() {

    const slides = useRef("");
    
    let posX1;
    let posX2;

    const dragStart = ( e ) => {

        if( e.type === "touchstart" ) {
            posX1 = e.touches[0].clientX;
        } else {
            posX1 = e.clientX;
        }

        document.onmousemove = dragMove;
        document.onmouseup = dragEnd;
    }

    const dragMove = ( e ) => {

        if( slides.current.offsetLeft > 0 ) {
            slides.current.style.left = "0px";
        }

        if( slides.current.offsetLeft < -630 && window.innerWidth > 700 ) {
            slides.current.style.left = "-630px";
        }

        if( window.innerWidth <= 700 && slides.current.offsetLeft < -950 ) {
            slides.current.style.left = "-950px"
        }


        if( e.type === "touchmove" ) {
            posX2 = posX1 - e.touches[0].clientX;
            posX1 = e.touches[0].clientX;
        } else {
            posX2 = posX1 - e.clientX;
            posX1 = e.clientX;
        }

        slides.current.style.left = `${slides.current.offsetLeft - posX2}px`;
    }

    const dragEnd = () => {
        document.onmousemove = null;
    }

    return (
        <div className='mt-32'>
            <div>
                <h2 className='capitalize text-headingColor font-bold text-2xl'>our fresh & healthy fruits</h2>
                <p className='w-32 h-1 rounded-xl bg-orange-500'></p>
            </div>

            <div className='w-[100%] h-48 relative mt-16 overflow-hidden'>
                <div 
                onTouchStart={dragStart}
                onTouchMove={dragMove}
                onMouseDown={dragStart}
                ref={slides} className='w-[2000px] flex absolute top-0 left-0 mt-4 '>
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

export default ProductHeader;