import React from 'react'

// CSS
import '../css/Feature.css'
// End CSS

// Asset Images
import truck from '../assets/truck.png'
import badge from '../assets/badge.png'
import cloth from '../assets/cloth.png'
import image from '../assets/image-feature.png'
// End Asset Images

const Feature = () => {
    return (
        <div className='feature'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="feature-text">
                            <h3>
                                We built our business on great customer service
                            </h3>
                            <p>
                                Initially, but then we realized we could make a lot more money if we sort of
                                stopped caring about that. Our new strategy is to write a bunch of things that
                                look really good in the headlines, then clarify in the small print but hope
                                people don't actually read it.
                            </p>
                        </div>
                        <div className="benefit">
                            <div className="feature-item">
                                <img src={truck} alt=""/>
                                <h4>
                                    Free Shipping
                                </h4>
                                <p>
                                    The cost is not actually free; we simply include it in the product prices.
                                    Someone is paying for it, and it's not us
                                </p>
                            </div>
                            <div className="feature-item">
                                <img src={badge} alt=""/>
                                <h4>
                                    10-year warranty
                                </h4>
                                <p>
                                    If it malfunctions within the first 10 years, we'll provide a replacement.
                                    However, beyond that period, you'll be responsible for any repairs or
                                    replacements."
                                </p>
                            </div>
                            <div className="feature-item">
                                <img src={cloth} alt=""/>
                                <h4>
                                    Exchanges
                                </h4>
                                <p>
                                    If you're dissatisfied with it, you can trade it with one of your friends for
                                    something they have. Just don't send it back to us.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-6">
                        <div className="feature-image">
                            <img src={image} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature