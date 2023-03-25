import React from 'react'
import "./Main.css"

function importAll(r) {
    let images = {};
    r.keys().map(item => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('/Users/annaleoshko/Desktop/online-shop-react/shop/src/img/goods', false, /\.png/));

export default function Main() {
    return (
        <main className='main'>
            <section className='offers'>
                <div className='container'>
                    <div className='offer-section'>
                        <div className='offer-section-content'>
                            <h2>Your Best Value Products</h2>
                            <p className='offer-section-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className='offer-section-image'></div>
                    </div>
                </div>
            </section>
            <section  className='products'>
                <div className='container'>
                    <div className='products-search'>
                        <h1>All items</h1>
                        <div className='search-block'>
                            <button className='search-button'>
                                <svg width="24" height="24" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M27.5367 25.8687L19.6747 18.0066C20.8947 16.4294 21.5547 14.501 21.5547 12.4727C21.5547 10.0447 20.6071 7.76816 18.8937 6.05166C17.1802 4.33516 14.8976 3.39062 12.4727 3.39062C10.0478 3.39062 7.76514 4.33818 6.05166 6.05166C4.33516 7.76514 3.39062 10.0447 3.39062 12.4727C3.39062 14.8976 4.33818 17.1802 6.05166 18.8937C7.76514 20.6102 10.0447 21.5547 12.4727 21.5547C14.501 21.5547 16.4264 20.8947 18.0036 19.6777L25.8656 27.5367C25.8887 27.5598 25.916 27.5781 25.9462 27.5906C25.9763 27.6031 26.0086 27.6095 26.0412 27.6095C26.0738 27.6095 26.1061 27.6031 26.1362 27.5906C26.1664 27.5781 26.1937 27.5598 26.2168 27.5367L27.5367 26.2198C27.5598 26.1968 27.5781 26.1694 27.5906 26.1393C27.6031 26.1091 27.6095 26.0769 27.6095 26.0442C27.6095 26.0116 27.6031 25.9793 27.5906 25.9492C27.5781 25.9191 27.5598 25.8917 27.5367 25.8687ZM17.268 17.268C15.9844 18.5485 14.283 19.2539 12.4727 19.2539C10.6623 19.2539 8.96094 18.5485 7.67734 17.268C6.39678 15.9844 5.69141 14.283 5.69141 12.4727C5.69141 10.6623 6.39678 8.95791 7.67734 7.67734C8.96094 6.39678 10.6623 5.69141 12.4727 5.69141C14.283 5.69141 15.9874 6.39375 17.268 7.67734C18.5485 8.96094 19.2539 10.6623 19.2539 12.4727C19.2539 14.283 18.5485 15.9874 17.268 17.268Z" fill="#333333"/>
                                </svg>
                            </button>
                            <input placeholder='Search...'></input>
                        </div>
                    </div>
                    <div className='card-flex'>
                        <div className='card'>
                            <div className='card-inner'>
                                <img src={images['sofa1.png']} alt='Furniture'></img>
                                <div className='card-price'>
                                    <h3>Comfort</h3>
                                    <span>$299</span>
                                </div>
                                <p className='card-description'>Green 2-Seater velvet sofa</p>
                                <div className='cart-button-wrap'>
                                    <button className='cart-button'>Add to Bag</button>
                                </div>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='card-inner'>
                                <img src={images['sofa2.png']} alt='Furniture'></img>
                                <div className='card-price'>
                                    <h3>Comfort</h3>
                                    <span>$299</span>
                                </div>
                                <p className='card-description'>Green 2-Seater velvet sofa</p>
                                <div className='cart-button-wrap'>
                                    <button className='cart-button'>Add to Bag</button>
                                </div>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='card-inner'>
                                <img src={images['sofa3.png']} alt='Furniture'></img>
                                <div className='card-price'>
                                    <h3>Comfort</h3>
                                    <span>$299</span>
                                </div>
                                <p className='card-description'>Green 2-Seater velvet sofa</p>
                                <div className='cart-button-wrap'>
                                    <button className='cart-button'>Add to Bag</button>
                                </div>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='card-inner'>
                                <img src={images['sofa4.png']} alt='Furniture'></img>
                                <div className='card-price'>
                                    <h3>Comfort</h3>
                                    <span>$299</span>
                                </div>
                                <p className='card-description'>Green 2-Seater velvet sofa</p>
                                <div className='cart-button-wrap'>
                                    <button className='cart-button'>Add to Bag</button>
                                </div>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='card-inner'>
                                <img src={images['sofa5.png']} alt='Furniture'></img>
                                <div className='card-price'>
                                    <h3>Comfort</h3>
                                    <span>$299</span>
                                </div>
                                <p className='card-description'>Green 2-Seater velvet sofa</p>
                                <div className='cart-button-wrap'>
                                    <button className='cart-button'>Add to Bag</button>
                                </div>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='card-inner'>
                                <img src={images['sofa6.png']} alt='Furniture'></img>
                                <div className='card-price'>
                                    <h3>Comfort</h3>
                                    <span>$299</span>
                                </div>
                                <p className='card-description'>Green 2-Seater velvet sofa</p>
                                <div className='cart-button-wrap'>
                                    <button className='cart-button'>Add to Bag</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
