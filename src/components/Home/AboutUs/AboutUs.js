import React from 'react';
import aboutUsPhoto from '../../../images/about-us-photo.jpg';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <section className='container about-us-section'>
            <div className="row">
                <div className="col-md-5">
                    <img className="about-us-photo img-fluid" src={aboutUsPhoto} alt="about-us" />
                </div>
                <div className="col-md-7">
                    <div className="about-us-text">
                    <h1 className="section-title-red about-us-section-title mt-4 mb-4">About US</h1>
                    <h5 style={{fontWeight: '400'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. At magni, eius nemo ea provident odit dolor temporibus blanditiis architecto tempora quaerat a quis porro laudantium labore aliquam? Sapiente illum dignissimos, molestias in quo inventore, libero, quaerat omnis quidem nulla architecto aliquam harum ad quisquam rerum laudantium voluptas et sit aliquid.</h5>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;