import React from 'react';
import yuvi from '../../../image/yuvi.jpg';
import BlogPost from '../BlogPost/BlogPost';
import './Blogs.css';
const blogData = [
    {
        title : 'Learn from customer feedback',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Consaltant. Tina',
        authorImg : yuvi,
        date : '23 April 2020'
    },
    {
        title : 'High savings potential',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Consaltant. Summy',
        authorImg : yuvi,
        date : '23 April 2020'
    },
    {
        title : 'Find the right accounting',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Consultant. Curlly',
        authorImg : yuvi,
        date : '23 April 2020'
    },
]

const Blogs = () => {
    return (
        <section className="blogs my-5">
           <div className="container">
               <div className="section-header text-center">
                    <h5  className="text-success text-uppercase">our blog</h5>
                    <h1>From Our Blog Posts</h1>
               </div>
               <div className="card-deck mt-5">
                    {
                        blogData.map(blog => <BlogPost blog={blog} key={blog.title}></BlogPost>)
                    }
               </div>
           </div>
       </section>
    );
};

export default Blogs;