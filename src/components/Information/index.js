/*
import React from 'react'
import styles from './style.module.css'

import InfoElements from './InfoElements';

const Information = () => 
<section className={styles.information}>
   
        <div className={styles.info1}>
            <InfoElements slika="Cube" source = {require('../../images/cube.png')} naslov={"Dimenzije okvira?"} tekst={"3D okviri su dimenzije 26x26x2cm, dok su 2D okviri, 21x30cm, svaki okvir je bijele boje."}/>
            <InfoElements naslov={"Vrijeme izrade?"} tekst={"Za izradu okvira i dostavu zajedno treba 15-20 dana."}/>
            <InfoElements naslov={"Načini plaćanja?"} tekst={"Plaćanje se vrši uplatom na račun, kojeg dobijete prilikom ispune obrasca na linku: Naruči okvir"}/>      
        </div>
    
</section> 
 
export default Information;
*/
/* <img src={cube} alt="description"/>*/
/*    <li>Dimenzije okvira?</li>
            <p>3D okviri su dimenzije 26x26x2cm, dok su 2D okviri, 21x30cm, svaki okvir je
             bijele boje.</p>*/

             import React from 'react'
import styles from './style.module.css'
 
import InfoElements from './InfoElements';
 
const Information = () =>
    <section className={styles.information}>
 
        <div className={styles.info1}>
            <InfoElements slika="cube.png" naslov={"Dimenzije okvira?"}>
                <span>3D okviri su dimenzije 26x26x2cm,<br/>  dok su 2D okviri, 21x30cm, svaki okvir je <br/> bijele boje.</span>
            </InfoElements>
            <InfoElements naslov={"Vrijeme izrade?"} tekst={"Za izradu okvira i dostavu zajedno treba 15-20 dana."} />
            <InfoElements naslov={"Načini plaćanja?"} tekst={"Plaćanje se vrši uplatom na račun, kojeg dobijete prilikom ispune obrasca na linku: Naruči okvir"} />
        </div>
 
    </section>
 
export default Information;