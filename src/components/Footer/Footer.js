import React from 'react';
import logo from '../../Assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faAngleRight, faCheck } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div className='container footer mt-3 p-4'>
            <div className='row pt-5 pb-5'>

                <div className='col-lg-3 col-md-3 co-sm-12'>
                    <a className="navbar-brand" href="# " target="_blank" rel="noopener noreferrer">
                        <img src={logo} alt="FunnelStory Logo" className="logo" />
                    </a>
                    <br /><br />
                    <a className="navbar-brand mt-2" href="# " target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} /> sales@funnelstory.com
                    </a>
                </div>
                <div className='col-lg-2 col-md-2 co-sm-12'>
                    <h6 className='text-secondary'>Product</h6>
                    <div class="list-group">
                        <a href="# " target="_blank" rel="noopener noreferrer" class="list-group-item list-group-item-action ps-0">Overview</a>
                        <a href="# " target="_blank" rel="noopener noreferrer" class="list-group-item list-group-item-action ps-0">Pricing</a>
                        <a href="# " target="_blank" rel="noopener noreferrer" class="list-group-item list-group-item-action ps-0">Release Notes</a>
                    </div>

                </div>
                <div className='col-lg-2 col-md-2 co-sm-12'>
                    <h6 className='text-secondary'>Resources</h6>
                    <div class="list-group">
                        <a href="# " target="_blank" rel="noopener noreferrer" class="list-group-item list-group-item-action ps-0">Blog</a>
                        <a href="# " target="_blank" rel="noopener noreferrer" class="list-group-item list-group-item-action ps-0">Podcost</a>
                        <a href="# " target="_blank" rel="noopener noreferrer" class="list-group-item list-group-item-action ps-0">Help Center</a>
                    </div>
                </div>
                <div className='col-lg-2 col-md-2 co-sm-12'>
                    <h6 className='text-secondary'>Company</h6>
                    <div class="list-group">
                        <a href="# " target="_blank" rel="noopener noreferrer" class="list-group-item list-group-item-action ps-0">Our Story</a>
                        <a href="# " target="_blank" rel="noopener noreferrer" class="list-group-item list-group-item-action ps-0">Team</a>
                    </div>
                </div>
                <div className='col-lg-3 col-md-3 co-sm-12'>
                    <div class="list-group">
                        <div class="list-group-item list-group-item-action">
                            Trust Report <FontAwesomeIcon icon={faAngleRight} />
                        </div>
                        <div class="list-group-item list-group-item-action">
                            <button className='btn btn-success'>
                                Service Status <FontAwesomeIcon icon={faCheck} /> <br />
                                All System Operational
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='border my-2'></div>
            <div className='row pt-2'>
                <div className='col-lg-4 col-md-4 co-sm-12'>
                    <p className='my-0 mt-2'>Copyright @2023 FunnelStory. All Rights Reserved</p>
                </div>
                <div className='col-lg-4 col-md-4 co-sm-12'>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item">Terms of Service</li>
                        <li class="list-group-item">Policy Privacy</li>
                        <li class="list-group-item">Cookies</li>
                    </ul>
                </div>
                <div className='col-lg-4 col-md-4 co-sm-12'>
                    <ul class="list-group list-group-horizontal float-end">
                        <li class="list-group-item"><FontAwesomeIcon icon={faTwitter} /></li>
                        <li class="list-group-item"><FontAwesomeIcon icon={faFacebook} /></li>
                        <li class="list-group-item"><FontAwesomeIcon icon={faLinkedin} /></li>
                        <li class="list-group-item"><FontAwesomeIcon icon={faInstagram} /></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;