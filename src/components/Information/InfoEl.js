import React from 'react'
 
import ImageLoader from '../ImageLoader'
 
const InfoEl = (props) => {
    //console.log(props);
    return (
            <div style={{ width: '50px', overflow: 'visible', position: 'relative',bottom:'-50px', left:'80px'}}>
                <ImageLoader imageName={props.slika} />
            </div>
    );
}
 
export default InfoEl;