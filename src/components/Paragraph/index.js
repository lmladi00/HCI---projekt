import React, { useEffect } from "react"
import styles from './style.module.css'

import "aos/dist/aos.css";
import Aos from "aos"
import { Link } from 'gatsby'
 
const Paragraph = () => {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);
    return(
    <section data-aos="fade-up" className ={styles.paragraph}>
        <div>
            <h1>Lali_creates</h1>
            <p> Dobrodošli u svijet personaliziranih okvira, osmišljenih s puno ljubavi i<br/> pažnje, a i malo mašte. <br/>U ponudi su okviri za razne prigode, od krštenja, vjenčanja, rođendana <br/>pa sve do Božića, Valentinova i ostalih prigoda. Ukoliko ne znate što <br/>pokloniti Vama dragoj osobi ili ako Vi imate neku ideju i trebate malu <br/>pomoć, lali_creates je tu Za Vas.
            <br/>S povjerenjem obratite nam se na našu email adresu ili nas posjetite na <br/>instagramu <Link to ={'https://www.instagram.com/diy_lali_creates/'}><span>lali_creates.</span></Link>
            </p>
        </div>
    </section> 
);
};
 
export default Paragraph