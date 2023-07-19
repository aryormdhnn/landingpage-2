import React from 'react'

// css
import '../css/Brand.css'

// images
import logo from '../assets/brand.svg'
import logo1 from '../assets/brand-1.svg'
import logo2 from '../assets/brand-2.svg'
import logo3 from '../assets/brand-3.svg'
import logo4 from '../assets/brand-4.svg'
import logo5 from '../assets/brand-5.svg'

function Brand() {
    return (
        <div className="brand">
            <div className="brand-title">
                <h3>
                    We Are Supported By
                </h3>
            </div>
            <div className="brand-img">
                <div className="row">
                    <div className="col-2">
                        <img src={logo} alt="brand"/>
                    </div>
                    <div className="col-2">
                        <img src={logo1} alt="brand"/>
                    </div>
                    <div className="col-2">
                        <img src={logo2} alt="brand"/>
                    </div>
                    <div className="col-2">
                        <img src={logo3} alt="brand"/>
                    </div>
                    <div className="col-2">
                        <img src={logo4} alt="brand"/>
                    </div>
                    <div className="col-2">
                        <img src={logo5} alt="brand"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brand
