import DishesHeader from '../components/DishesHeader';
import NavBar from '../components/NavBar';
import ProductHeader from '../components/ProductHeader';
import Products from '../components/Products';

function Home() {
    return (
        <div className='px-14'>
            <NavBar />
            <ProductHeader />
            <Products />
            <DishesHeader />
        </div>
    );
}

export default Home;