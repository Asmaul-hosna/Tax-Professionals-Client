import React from 'react';

const Testimonial = (props) => {
    const {review,img,name,profession} = props.testimonial;
    return (
        <div className="card shadow-sm">
            <div className="card-body">
                <p className="card-text text-center">{review}</p>
            </div>
            <div className="card-footer d-flex  align-items-center">
                <img className="mx-3" src={img} alt="" width="60"/>
                <div>
                    <h6 className="text-success">{name}</h6> 
                    <p className="m=0">{profession}</p>
                  
                </div>
            </div>
       </div>
    );
};

export default Testimonial;