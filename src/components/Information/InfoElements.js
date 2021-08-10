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