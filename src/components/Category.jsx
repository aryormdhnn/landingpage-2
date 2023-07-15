import React from 'react'

import '../css/Category.css'

import category1 from '../assets/category1.png'

const Category = () => {
    return (
        <div className='category'>
      <h2>Belanja dari Kategori</h2>
      <div className='category_container'>
        <div className='row'>
          <div className='col-md-3'>
            <div className='section-category'>
              <img src={category1} alt='' />
              <div className='overlay'>
                <p>New Product</p>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='section-category'>
              <img src={category1} alt='' />
              <div className='overlay'>
                <p>Cloth</p>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='section-category'>
              <img src={category1} alt='' />
              <div className='overlay'>
                <p>Pants</p>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='section-category'>
              <img src={category1} alt='' />
              <div className='overlay'>
                <p>Jacket</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Category