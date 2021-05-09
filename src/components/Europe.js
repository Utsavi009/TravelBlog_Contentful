import React from 'react';
import Blog from './Blog';
import '../App.css';


const Europe = ({europeBlogs}) => {
    console.log(europeBlogs)
    
    return(
        <div className='container morepadding'>
        <hr className="text-countries-hr" />
        <div>
        <h1 className="text-countries">Europe</h1></div>
        <hr className="text-countries-hr" />
        <div>
            {
                europeBlogs.filter(blog =>
                     blog.fields.continent === 'Europe').map((blog, index) => {
                        return ( 
                         <Blog key={index} article={blog} /> 
                        ); 
                     })
            }
        </div>
        </div>
    )
}

export default Europe;