import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';  
import {Carousel} from 'react-bootstrap';
import '../App.css';
import marked from 'marked'; // need to install marked

const Blog = ({article}) => {
    

    const {title, blogEntry, image, location, date, continent} = article.fields;
    const blogDescription = marked(blogEntry)  // to format text into html format
    console.log(continent);
    console.log(article);

    const newTime = date.split('T')[0]
    console.log(newTime);

    return (
        <div>
            <div className='card'>
                <div className='blog-cards'>
                    <h1 className='title'>{title}</h1>
                    <div className='location-date-time'>
                        <div><b>Location:</b> {location} </div>
                        <div><b>Posted on:</b> {newTime}</div>
                    </div>
                    <div className='blog-images'>
                    
                        <Carousel>
                            <Carousel.Item>
                                <img src={image[0].fields.file.url} className='blog-image'/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={image[1].fields.file.url} className='blog-image'/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={image[2].fields.file.url} className='blog-image'/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={image[3].fields.file.url} className='blog-image'/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={image[4].fields.file.url} className='blog-image'/>
                            </Carousel.Item>
                        </Carousel>
                        
                    </div>
                    <div className='blog-entry'>
                        <section dangerouslySetInnerHTML={{ __html: blogDescription }} />
                    </div>
                </div>
            </div> 
        
        </div>
    );
}

export default Blog;