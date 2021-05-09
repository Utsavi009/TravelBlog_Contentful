import React from 'react'
import Blog from './Blog'
import '../App.css';

const Blogs = ({blogs}) => {
    return (
        <div className='container'>
            <div className='blogs'>
                {blogs.map((blog, index) => <Blog key={index} article={blog} />)}
            </div>
        </div>
    );
}

export default Blogs;