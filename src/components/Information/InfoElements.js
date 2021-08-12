/*
import React from 'react'

const InfoElements = (props) =>
{
    console.log(props);
    return(
        <div>
            <li>{props.naslov}</li>
            <p>{props.tekst}</p>
        </div>
    );
}

export default InfoElements;
*/
import React from 'react'
 
import ImageLoader from '../ImageLoader'
 
const InfoElements = (props) => {
    //console.log(props);
    return (
        <div>
            <div style={{ width: '80px', opacity: 0.8 }}>
                <ImageLoader imageName={props.slika} />
            </div>
            <li>{props.naslov}</li>
            {props.children}
        </div>
    );
}
 
export default InfoElements;