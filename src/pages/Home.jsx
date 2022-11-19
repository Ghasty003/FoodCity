import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import ProductHeader from '../components/ProductHeader';
import { SideBarContextProvider } from '../context/SideBarContext';

function Home() {
    return (
        <div>
            <SideBarContextProvider>
                <NavBar />
            </SideBarContextProvider>
            <Header />
            <ProductHeader />
        </div>
    );
}

export default Home;