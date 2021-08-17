import React from 'react'
 
import ImageLoader from '../ImageLoader'
 
const ImgParag3 = (props) => {
    //console.log(props);
    return (
        <div>           
            <div>
                <ImageLoader imageName={props.img} />
            <li>{props.tekst}
                {props.children}
            </li>
                
        </div>
        </div>
    );
}
 
export default ImgParag3;

/*<h2>{props.naslovparagrafa}</h2> */