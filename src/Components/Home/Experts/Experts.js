import React from 'react';
import Expert from '../Expert/Expert';

const Experts = () => {
    return (
        <section className="experts">
            <div className="container">
                <h5 className="text-center text-success mb-5">Meet Our Experts</h5>
                <div className="row">
                    <Expert/>
                    <Expert/>
                    <Expert/>

                </div>

            </div>
            
        </section>
    );
};

export default Experts;