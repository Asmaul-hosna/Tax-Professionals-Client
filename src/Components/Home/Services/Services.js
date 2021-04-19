import React from 'react';
import personal from '../../../image/personal.png';
import business from '../../../image/business.png';
import secret from '../../../image/secret.jpg';
import AllServices from '../AllServices/AllServices';
const serviceData = [
    {
        name: 'Personal Taxes',
        price: '$120',
        img: personal
    },
    {
        name: 'Business Taxes',
        price:'$140',
        img: business
    },
    {
        name: 'Commercial Secretarial',
        price: '$110',
        img: secret
    }
]

const Services = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 style={{color:'green'}}>OUR SERVICES</h5>
                <h2>What Service We Offer</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        serviceData.map(service => <AllServices service={service} key={service.name}></AllServices>)
                    }

                </div>
                
                </div>
            
        </section>
    );
};

export default Services;