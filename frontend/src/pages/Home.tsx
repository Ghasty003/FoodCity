import DishesHeader from '../components/DishesHeader';
import NavBar from '../components/NavBar';
import ProductHeader from '../components/ProductHeader';
import Products from '../components/Products';
import Sidebar from '../components/Sidebar';
import { RendererContextProvider } from '../contexts/RendererContext';

function Home() {
    return (
        <div className='px-14'>
            <RendererContextProvider>
                <NavBar />
                <Sidebar />
                <ProductHeader />
                <Products />
                <DishesHeader />
            </RendererContextProvider>
        </div>
    );
}

export default Home;