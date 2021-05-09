import React from 'react';
import Blog from './Blog';
import '../App.css';


const Africa = ({africaBlogs}) => {
    return(
        <div className='container morepadding'>
        <hr className="text-countries-hr" />
        <div>        
        <h1 className="text-countries">Africa</h1></div>
        <hr className="text-countries-hr" />
        <div>
            {
                africaBlogs.filter(blog =>
                     blog.fields.continent === 'Africa').map((blog, index) => {
                        return ( 
                         <Blog key={index} article={blog} /> 
                        ); 
                     })
            }
        </div>
        </div>
    )
}

export default Africa;