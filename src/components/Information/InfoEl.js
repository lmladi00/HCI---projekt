import React from 'react'
 
import ImageLoader from '../ImageLoader'
 
const InfoEl = (props) => {
    //console.log(props);
    return (
            <div style={{ width: '45px', maxHeight:'300px', overflow: 'visible', position: 'absolute',bottom:'-50px', left:'120px'}}>
                <ImageLoader imageName={props.slika} />
            </div>
    );
}
 
export default InfoEl;