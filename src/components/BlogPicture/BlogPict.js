import React from 'react'
 
import ImageLoader from '../../components/ImageLoader'

const BlogPicture = (props) => {
    //console.log(props);
    return (
            <div style={{textAlign:'center', objectFit:'cover', display: 'block', margin: 'auto auto'}}>
                <ImageLoader imageName={props.img} />
            </div>
      
    );
}
 
export default BlogPicture;