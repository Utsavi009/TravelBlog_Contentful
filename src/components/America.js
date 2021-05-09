import React from 'react';
import Blog from './Blog';
import '../App.css';


const America = ({americaBlogs}) => {
    return(
        <div className='container morepadding'>
        <hr className="text-countries-hr" />
        <div>
        <h1 className="text-countries">North & South America</h1></div>
        <hr className="text-countries-hr" />
        <div>
            {
                americaBlogs.filter(blog =>
                     blog.fields.continent === 'America').map((blog, index) => {
                        return ( 
                         <Blog key={index} article={blog} /> 
                        ); 
                     })
            }
        </div>
        </div>
    )
}

export default America;