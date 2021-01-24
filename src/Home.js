import React from 'react'
import './Home.css'
import Product from './Product'

function Home({ id,title,image,price,rating }) {
    return (
        <div className="home">
            <div className="home__container">
                <img
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Boson/Sid/CCBP/Nov/BAU/Credit-Card-Bill_1500x600_without._CB415288872_.jpg" alt=""/>

                <div className="home__row">
                    <Product 
                    id="101"
                    title='Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!'
                    price={29.99}
                    image="https://m.media-amazon.com/images/I/91VokXkn8hL._AC_UY218_.jpg"
                    rating={5}
                    />
                    <Product
                    id="102"
                    title='New Apple iPhone 12 (128GB) - Blue'
                    price={750.99}
                    image="https://m.media-amazon.com/images/I/71ZOtNdaZCL._AC_UY218_.jpg"
                    rating={4}
                    
                    />
                    
                </div>
                <div className="home__row">
                <Product
                id="103"
                title='HP Pavilion Gaming 15.6-inch FHD Gaming Laptop (Ryzen 5-4600H/8GB/1TB HDD + 256GB SSD/Windows'
                price={720.99}
                image="https://m.media-amazon.com/images/I/71VlaIUD10L._AC_UY218_.jpg"
                rating={4}
                
                />
                    <Product
                    id="104"
                    title='Sony WH-CH710N Noise Cancelling Wireless Headphones : Bluetooth Over The Ear Headset with Mic for Phone'
                    price={60.99}
                    image="https://m.media-amazon.com/images/I/61N6Ai7RkJL._AC_UY218_.jpg"
                    rating={4}
                    
                            
                    />
                    <Product
                    id="105"
                    title='Samsung Galaxy Watch Active 2 (Bluetooth, 44 mm) - Black, Aluminium Dial, Silicon Straps'
                    price={200.99}
                    image="https://m.media-amazon.com/images/I/61uej9efKYL._AC_UL320_.jpg"
                    rating={5}
                    
                    />
                    
                </div>
                <div className="home__row">
                <Product
                id="106"
                title='Samsung 125 cm (50 Inches) 4K Ultra HD Smart LED TV UA50RU7470UXXL (Black)'
                price={560.99}
                image="https://m.media-amazon.com/images/I/81KxH-Uj5xL._AC_UY218_.jpg"
                rating={5}
                
                />
                    
                </div>

            </div>
        </div>
    )
}

export default Home
