import React from 'react'
 
import ImageLoader from '../ImageLoader'
 
const ImgIzbornik = (props) => {
    //console.log(props);
    return (
        <div style={{ width: '40px', overflow: 'visible', margin:'10px' }}>           
                <ImageLoader imageName={props.img} />
        </div>
    );
}
 
export default ImgIzbornik;