import React from 'react';
import lisa from '../../../image/lisa.jpg';
import andraw from '../../../image/andraw.jpg';
import emily from '../../../image/emily.jpg';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';

const testimonialData = [
    {
        review : 'We have extensive experience with tax returns, financial statements, tax research, tax planning and tax provision support, having worked many years in these areas. ',
        name : 'Lisa Loreal',
        img : lisa,
        profession:'Manager at XYZ'
    },
    {
        review : 'We have extensive experience with tax returns, financial statements, tax research, tax planning and tax provision support, having worked many years in these areas. ',
        name : 'Andraw Potter',
        img : andraw,
        profession:'Co-Founder at Uber'
    },
    {
        review : 'We have extensive experience with tax returns, financial statements, tax research, tax planning and tax provision support, having worked many years in these areas. ',
        name : 'Emily Amy',
        img : emily,
        profession:'CEO at Bigcane'
    }
]


const Testimonials = () => {
    return (
        <section className="testimonials my-5 py-5">
           <div className="container">
               <div className="section-header">
                   <h5 className="text-success text-uppercase">Testimonial</h5>
                   <h1>What Our Clients <br/> Says </h1>
               </div>
               <div className="card-deck mt-5">
                    {
                        testimonialData.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name}></Testimonial>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Testimonials;