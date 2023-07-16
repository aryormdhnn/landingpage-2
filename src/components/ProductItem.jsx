// ProductItem.js
import React from 'react';

function ProductItem({ image, name, price }) {
    return (
        <div className='col-md-3'>
            <div className='product-category'>
                <img src={image} alt='' />
                <div className='overlay'>
                    <div className="btn">
                        Add To Cart
                    </div>
                </div>
            </div>
            <div className="product-name">
                <h6>
                    {name}
                </h6>
                <p>
                    {price}
                </p>
            </div>
        </div>
    );
}

export default ProductItem;
