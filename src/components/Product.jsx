import React from 'react';
import '../css/Product.css';
import ProductItem from './ProductItem';

// Asset images
import baju1 from '../assets/baju1.png';
import baju2 from '../assets/baju2.png';
import baju3 from '../assets/baju3.png';
import baju4 from '../assets/baju4.png';
import baju5 from '../assets/baju5.png';
import baju6 from '../assets/baju6.png';
import baju7 from '../assets/baju7.png';
import baju8 from '../assets/baju8.png';

function Product() {
    return (
        <div>
            <div className="product">
                <div className="product-title">
                    <div className="col-6">
                        <h2>Product Title</h2>
                    </div>
                    <div className="col-6 align-right">
                        <button className="btn-hero">Kontak Kami</button>
                    </div>
                </div>
                <div className='product-content'>
                    <div className='row'>
                        <ProductItem image={baju1} name="Product 1" price="Rp. 35.000,-"/>
                        <ProductItem image={baju2} name="Product 2" price="Rp. 79.000,-"/>
                        <ProductItem image={baju3} name="Product 3" price="Rp. 99.000,-"/>
                        <ProductItem image={baju4} name="Product 4" price="Rp. 99.000,-"/>
                        <ProductItem image={baju5} name="Product 5" price="Rp. 199.000,-"/>
                        <ProductItem image={baju6} name="Product 6" price="Rp. 69.000,-"/>
                        <ProductItem image={baju7} name="Product 7" price="Rp. 99.000,-"/>
                        <ProductItem image={baju8} name="Product 8" price="Rp. 59.000,-"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
