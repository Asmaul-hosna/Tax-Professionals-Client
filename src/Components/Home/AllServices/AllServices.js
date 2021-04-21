import React from 'react';
import { Link } from 'react-router-dom';

const AllServices = ({service}) => {
    return (
        <div className="col-md-4 text-center">
          <img style={{height: '50px'}} src={service.img} alt="" />
            <h5 className="mt-3 mb-3">{service.name}</h5>
            <p style ={{color:'green'}}>{service.price}</p>
            <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quaerat?</p>  
            <Link to="/bookedService"><button className="btn btn-success">Buy now</button></Link>
        </div>
    );
};

export default AllServices;