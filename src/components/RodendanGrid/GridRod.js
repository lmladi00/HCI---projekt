import React from 'react'
 
import ImageLoader from '../ImageLoader'
 
const GridRod = (props) => {
    //console.log(props);
    return (
        <div>
            <div style={{ width: '310px', overflow: 'visible', position: 'relative', margin:'auto auto'}}>
                <ImageLoader imageName={props.slika} />
            </div>
            <li>{props.cijena}</li>
            <a href='mail'><button>{props.naruci}</button></a>
        </div>
    );
}
 
export default GridRod;