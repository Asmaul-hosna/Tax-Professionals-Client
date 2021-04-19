import React from 'react';
import women from "../../../image/women.jpg";

const HeaderMain = () => {
    return (
        <main  style={{height:'600px'}}className="row d-flex align-items-center">
             <div className="col-md-4 offset-md-1">
                 <h1>We Are Calculating The Best Opportunities<br/> For You</h1>
                 <button className="btn btn-success">Get Started</button>
             </div>
             <div className="col-md-6">
                 <img src={women} alt="" className="img-fluid"/>

             </div>
            
        </main>
    );
};

export default HeaderMain;