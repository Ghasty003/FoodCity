import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import MenuBar from '../components/MenuBar';
import NavBar from '../components/NavBar';
import ProductHeader from '../components/ProductHeader';
import { CheckoutContextProvider } from '../context/CheckoutContext';
import { SideBarContextProvider } from '../context/SideBarContext';

function Home() {
    return (
        <div>
            <SideBarContextProvider>
                <NavBar />
                <MenuBar />
                <Header />
                <ProductHeader />
            </SideBarContextProvider>
        </div>
    );
}

export default Home;