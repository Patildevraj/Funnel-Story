import React from 'react';
import '../BigSection/BigSection.css';
import big1 from '../../Assets/big1.png';
import big2 from '../../Assets/big2.png';
// import growth from '../../Assets/growth.png';
// import retention from '../../Assets/retention.png';
// import bottomcurve from '../../Assets/bottomcurve.png';
// import topcurve from '../../Assets/topcurve.png';
// import zigzagLine from '../../Assets/zigzagLine.png';

const BigSection = () => {
    return (
        <div className='container p-5'>

            {/* Heading */}
            <div className='row'>
                <div className='col-3'></div>
                <div className='col-6 text-center bigLabel'>
                    <h2>Don’t let any revenue escape your pipeline</h2>
                </div>
                <div className='col-3'></div>
            </div>

            {/* Account engagement */}
            <div className='row pt-2'>
                <div className='col-6 d-flex justlfy-content-end pt-5'>
                    <div className='accountContent p-5'>
                        <button className="btn funnelVisibility mb-4" type="submit">👀 Funnel Visibility</button>
                        <h2 className='pb-2'>You can’t action what you can’t see</h2>
                        <p>View all of your account funnel activity in real-time so you know where your pipeline stands. </p>
                    </div>
                </div>
                <div className='col-6'>
                    <img src={big1} className="big1 w-100" alt="big1" />
                </div>
            </div>


            {/* zigzagLine */}
            {/* <div className='row'>
                <div className='col-3'></div>
                <div className='col-6'>
                    <img src={zigzagLine} className="zigzagLine w-100" alt="zigzagLine" />  
                </div>
                <div className='col-3'></div>
            </div> */}


            {/* coach you team section */}
            <div className='row coachSection'>
                <div className='col-6'>
                    <img src={big2} className="big2 w-100" alt="big2" />
                </div>
                <div className='col-6 mt-5'>
                    <div className='accountContent mt-5 p-5'>
                        <button className="btn accelerateRevenue w-50 mb-2" type="submit">⏩ Accelerate Revenue</button>
                        <h2 className='pb-2'>Coach your team and close more deals</h2>
                        <p>Act on funnel intelligence and make revenue more predictable.  </p>
                    </div>
                </div>
            </div>

            {/* explore the product button */}
            <div className='text-center'>
                <button className="btn text-light exploreButton" type="submit">Explore the product</button>
            </div>


            {/* funnel section */}
            <div className='row'>
                <div className='col-6'></div>
                <div className='col-6'></div>
            </div>

        </div>
    )
}

export default BigSection