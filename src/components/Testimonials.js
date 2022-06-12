import React from 'react';
import bitmcertificatefront from '../images/certificates/BITM-asp.net-certificate-Jan-30-2021-1.png';
import bitmcertificateback from '../images/certificates/BITM-asp.net-certificate-Jan-30-2021-2.png';

const Testimonials = () => {
    return (
        <div className='px-32 bg-teal-100'>
            <h1 className='text-2xl py-5'>BITM ASP.NET Course</h1>
            <img src={bitmcertificatefront} alt="" />
            <br />
            <img src={bitmcertificateback} alt="" />
            <h1 className='text-2xl py-5'>Web development Course on PH</h1>
            <small>coming soon...</small>
        </div>
    );
};

export default Testimonials;