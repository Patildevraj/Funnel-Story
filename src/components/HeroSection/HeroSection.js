import React from 'react'
import '../HeroSection/HeroSection.css';
import vectorStar from '../../Assets/Vector (1).png';
import vector from '../../Assets/Vector.png';
import Group from '../../Assets/Group 8.png'

const HeroSection = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 col-sm-12 pt-5'>
                    <div className="header-content text-center m-auto">
                        <h1 className="header-title w-75 m-auto">Let your product data drive<span><img src={vectorStar} alt='vectorStar' /></span> revenue decisions.</h1>
                        <img id="Vector" src={vector} alt='vector' className='text-center' />
                        <p className="header-subtitle text-center w-50 mb-4">FunnelStory is a funnel intelligence platform designed to give go-to-market leaders complete visibility into their trial funnels to accelerate their product-led strategy.</p>
                        <div class="center-form">
                            <form className="form-inline d-flex justify-content-center mt-1">
                                <input className="form-control w-75" type="email" placeholder="Your work email" aria-label="Email" />
                                <button className="btn text-light" type="submit">Request Demo</button>
                            </form>
                        </div>
                        
                        <img src={Group} alt='Group 8' className='group8Image' />
                        <div className='customHeight'></div>
                    </div>
                </div>
            </div>
        </div>
    )


}

export default HeroSection