import React from 'react'
import '../MoreDataSection/MoreDataSection.css';
import moreDataImage from '../../Assets/moreDataImage.png';
import md1 from '../../Assets/md1.png';
import md2 from '../../Assets/md2.png';
import md3 from '../../Assets/md3.png';
import md4 from '../../Assets/md4.png';
import md5 from '../../Assets/md5.png';

const MoreDataSection = () => {
    return (
        <div className='container pt-5'>
            <div className='row'>
                <div className='col-2 md1 ps-5 pt-5'><img src={md1} alt='md1.png' className='md1' /></div>
                <div className='col-8 text-center'>
                    <h1 className="header-title w-75 m-auto">More data shouldn’t create more problems</h1>
                    <p className="header-subtitle text-center w-75 mb-4">Your customer data is spread across dashboards, spreadsheets, emails, and more. It’s time you had a 360-degree view of customer data so you can make decisions that drive your business.</p>

                </div>
                <div className='col-2 md2 pt-5 ps-5'><img src={md2} alt='md2.png' className='md2' /></div>
            </div>
            <div className='row'>
                <div className='col-1 md4 pt-5 pe-5'><img src={md4} alt='md4.png' className='md4' /></div>
                <div className='col-10'>
                    <span className='d-flex justify-content-end pe-5'><img src={md3} alt='md3.png' className='md3' /></span>
                    <img src={moreDataImage} alt='moreDataImage.png' className='moreDataImage' />
                </div>
                <div className='col-1 md5 d-flex align-end'><img src={md5} alt='md5.png' className='md5' /></div>
            </div>
        </div>
    )
}

export default MoreDataSection