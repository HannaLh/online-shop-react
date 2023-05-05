import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";
import Sort from "./Sort/Sort";
import Card from "./Card/Card"
import Drawer from "./Drawer/Drawer";
import Footer from "./Footer/Footer";

import "./App.css";

import furniture from "./assets/furniture.json";
console.log(furniture);


function App() {
    return (
        <div className='wrapper'>
            <Header />
            <Banner />
            <div className='container products'>
                <div className='products-search'>
                    <Categories />
                    <Sort />
                </div>
            </div>
            <div className="card-flex">
                {furniture.map((obj) => (
                    <Card title={obj.title} price={obj.price} image={obj.imageUrl}/>
                ))}
            </div>
            <Drawer/>
            <Footer/>
        </div>
    );
}

export default App;
