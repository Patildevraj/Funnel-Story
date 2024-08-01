import React from 'react'
import '../MarqueSection/MarqueSection.css'

const MarqueSection = ({logos}) => {
    return (
        <div className='container marque text-center'>
            <h5>TRUSTED BY</h5>
            <div className="marquee pt-5">
                {logos.map((logo, index) => (
                    <img src={logo} alt={`Company logo ${index}`} key={index} className="marquee-item" />
                ))}
            </div>
            <hr className='text-secondary mt-5' />

        </div>
    )
}

export default MarqueSection