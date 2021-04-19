import React from 'react';
import featured from '../../../image/featured.jpg'

const FeaturedService = () => {
    return (
        <section className="features-service py-5">
            <div className="row align-items-center container my-5 mx-auto">
            <div className="img col-lg-6 col-md-6 col-12 w-50 pt-5 pb-5">
                    <img className="img-fluid" src={featured} alt=""/>
                </div>
                <div className="text col-lg-6 col-md-6 col-12 w-50 pt-5 pb-5">
                  <h6 style={{color:'green'}}>About Us</h6>
                  <h2>Find The Right Accounting For<br/> Your Business</h2>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum non eius velit placeat, corporis similique eos fugit necessitatibus minima corrupti, quasi dolore veniam ea sequi, adipisci aspernatur voluptates nobis facere.</p>
                  <a style={{color:'green'}} href="#">Learn More</a>
                </div>
               

            </div>
            
        </section>
    );
};

export default FeaturedService;