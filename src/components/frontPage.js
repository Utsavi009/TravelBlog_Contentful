import React, {useState, useEffect} from 'react';

const FrontPage = ( {images} ) => {
        console.log(images);
/*         const { image } = images.fields;  */
        const newArray = images.map(image => {
                return image.fields.image[0].fields.file.url
        }
       ) 
       
       console.log(newArray);

        const randomBanner = [
            "newArray[0]",
            "https://media.giphy.com/media/9qvkhbHg3NOKI/giphy.gif",
            "https://media.giphy.com/media/l2Sqi7aWyZ5jBKwGk/giphy.gif"
        ];

        const [banner, setBanner] = useState("");
  
        useEffect(() => {
          setBanner(randomBanner[Math.floor(Math.random() * randomBanner.length)]);
        }, []);
    
/*         cocnst BannerStyle = {
            display: 'flex',
            flexWrap: 'wrap';    
            background: 'url(banner)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }; 
          
          */
        



/* const {image} = props.fields;
         console.log(image); 
 */    
/* 
   {blogs.map((blog, index) => <Blog key={index} article={blog} />)}

    const [currentImage, setCurrentImage] = useState("");

    useEffect(())
 */

    return (
    <div>
          <img src={newArray[0]} alt="Banner Image" height="300" />
               {/*      <img src={newArray[1]} /> */}
{/*                {
                    FrontPage && 
                    <div className="BannerStyle">
                    <img src={banner} alt="Banner Image" height="300" />

                    </div>
                } 
 */}

                 {/*        {image[0].fields.file.url} */}
                   {/*      <p> Nothing to display</p> */}
    </div>
    )
}

export default FrontPage;