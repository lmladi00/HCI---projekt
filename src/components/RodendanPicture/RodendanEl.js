import React from 'react'
 
import ImageLoader from '../ImageLoader'
 
const RodendanEl = (props) => {
    //console.log(props);
    return (
            <div style={{textAlign:'center', objectFit:'cover', display: 'block', margin: 'auto auto'}}>
                <ImageLoader imageName={props.slika} />
            </div>
    );
}
 
export default RodendanEl;

/*width: '800px', position: 'absolute', maxWidth:'100%', backgroundSize:'cover', objectFit:'cover', textAlign:'center'*/