import React from 'react';
import clipholder from '../../Assets/clipholder.png';
import card1 from '../../Assets/card1.png';
import card2 from '../../Assets/card2.png';
import card3 from '../../Assets/card3.png';
import bottomclip from '../../Assets/bottomclip.png';
import topclip from '../../Assets/topclip.png';
import cardbox from '../../Assets/cardbox.png';
import '../SolutionsSection/SolutionsSection.css'

const SolutionsSection = () => {
    return (
        <div className='container-fluid solutionsSection text-light'>
            <div className='bgsolution p-5'>
                <div className='row pb-5'>
                    <div className='col-3'></div>
                    <div className='col-6 text-center'>
                        <button className="btn text-light mb-4 sol-firstbutton" type="submit">Solutions</button>
                        <h2 className='mb-5 sol-title'>How we turn data into insights</h2>
                        <p className='sol-para'>Connect your revenue tech stack and build your data model - in minutes.</p>
                    </div>
                    <div className='col-3'></div>
                </div>

                <img src={topclip} className="topclip" alt="topclip" />
                <img src={clipholder} className="topclipholder" alt="topclipholder" />

                <div className='row mb-5'>
                    <div className='col-1'></div>
                    <div className='col-10'>
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            <div class="col">
                                <div className="card h-100 pb-5">
                                    <img src={cardbox} className="card-img-top cardbox" alt="cardbox" />
                                    <img src={card1} className="card-img-top card1" alt="card1" />
                                    <div className="card-body  gap-3">
                                        <h5 className="card-title">Ingest your data</h5>
                                        <p className="card-text">Connect your product interactions and conversational data without engineer support.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 pb-5">
                                    <img src={cardbox} className="card-img-top cardbox" alt="cardbox" />
                                    <img src={card2} className="card-img-top card2" alt="card2" />
                                    <div className="card-body pb-5 gap-3">
                                        <h5 className="card-title">Customer Activity Model</h5>
                                        <p className="card-text">Bring your product data together in one place to power your revenue workflows.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 pb-5">
                                    <img src={cardbox} className="card-img-top cardbox" alt="cardbox" />
                                    <img src={card3} className="card-img-top card3" alt="card3" />
                                    <div className="card-body pb-5 gap-3">
                                        <h5 className="card-title">Activate your data </h5>
                                        <p className="card-text">Get the insights that empower you to make decisions to grow your business. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-1'></div>
                </div>
                
                <img src={clipholder} className="bottomclipholder" alt="bottomclipholder" />
                <img src={bottomclip} className="bottomclip" alt="bottomclip" />

                <div className='text-center'>
                    <button className="btn text-light sol-secondbutton" type="submit">Request Demo</button>
                </div>
            </div>
        </div>
    )
}

export default SolutionsSection