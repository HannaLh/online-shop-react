import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";
import Sort from "./Sort/Sort";
import Card from "./Card/Card"
import Drawer from "./Drawer/Drawer";
import Footer from "./Footer/Footer";

import "./App.css";

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
                <Card title="Green Sofa" price={288}/>
                <Card title="Comfort Chair" price={300}/>
                <Card title="Ancient" price={400}/>
                <Card title="Ancient" price={199}/>
                <Card title="Special" price={256}/>
                <Card title="Classy" price={334}/>
                <Card title="Sunny" price={434}/>
                <Card title="Comfort" price={453}/>
            </div>
            <Drawer/>
            <Footer/>
        </div>
    );
}

export default App;
