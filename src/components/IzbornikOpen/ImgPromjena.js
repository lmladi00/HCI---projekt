import React from 'react'
 
import ImageLoader from '../ImageLoader'
 
const ImgPromjena = (props) => {
    //console.log(props);
    return (
        <div>
            <div style={{ width: '650px', overflow: 'visible', margin:'10px', position: 'relative', right:'340px', top:'100px'}}>           
                    <ImageLoader imageName={props.img} />
            </div>
        </div>
        
    );
}
 
export default ImgPromjena;