import React from 'react'
 
import ImageLoader from '../ImageLoader'
 
const InfoEl = (props) => {
    //console.log(props);
    return (
            <div style={{width:'80%', textAlign:'center', objectFit:'cover', display: 'block', margin: 'auto auto'}}>
                <ImageLoader imageName={props.slika} />
            </div>
    );
}
 
export default InfoEl;

/*width: '800px', position: 'absolute', maxWidth:'100%', backgroundSize:'cover', objectFit:'cover', textAlign:'center'*/