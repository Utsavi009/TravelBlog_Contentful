import React from 'react';
import Blog from './Blog';
import '../App.css';


const Asia = ({asiaBlogs}) => {
    return(
        <div className='container morepadding'>
         <hr className="text-countries-hr" />
        <div>
        <h1 className="text-countries">Asia</h1></div>
        <hr className="text-countries-hr" />
        <div>
            {
                asiaBlogs.filter(blog =>
                     blog.fields.continent === 'Asia').map((blog, index) => {
                        return ( 
                         <Blog key={index} article={blog} /> 
                        ); 
                     })
            }
        </div>
        </div>
    )
}

export default Asia;