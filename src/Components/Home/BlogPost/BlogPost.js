import React from 'react';

const BlogPost = (props) => {
    const {title, description, author, authorImg , date} = props.blog;
    return (
        <div className="card shadow-sm">
        <div className="card-header d-flex  align-items-center">
            <img className="mx-3" src={authorImg} alt="" width="60"/>
            <div>
                <h6 className="text-success">{author}</h6>
                <p className="m-0">{date}</p>
            </div>
        </div>
        <div className="card-body">
            <h5 style={{color:'green'}}>{title}</h5>
            <p className="card-text text-secondary mt-4">{description}</p>
        </div>
        
   </div>
    );
};

export default BlogPost;