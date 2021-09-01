import React from 'react'
 
import ImageLoader from '../../components/ImageLoader'

const BlogPicture = (props) => {
    //console.log(props);
    return (
            <div style={{ backgroundSize: '100% 100%', textAlign:'center', objectFit:'full', margin: 'auto auto'}}>
                <ImageLoader imageName={props.img} />
            </div>
      
    );
}
 
export default BlogPicture;