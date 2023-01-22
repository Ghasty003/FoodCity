import React from 'react';
import NavBar from '../components/NavBar';
import ProductHeader from '../components/ProductHeader';
import Products from '../components/Products';

function Home() {
    return (
        <div>
            <NavBar />
            <ProductHeader />
            <Products />
        </div>
    );
}

export default Home;