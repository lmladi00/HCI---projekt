import React from 'react'
 
import ImageLoader from '../ImageLoader'
 
const GridBlog = (props) => {
    //console.log(props);
    return (
        <div>
            <div style={{overflow: 'visible', position: 'relative', margin:'auto auto'}}>
                <ImageLoader imageName={props.slika} />
            </div>
            <li>{props.cijena}</li>
            <button>{props.naruci}</button>
        </div>
    );
}
 
export default GridBlog;