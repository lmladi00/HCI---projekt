import React, { useState, useEffect} from "react"
import * as styles from './style.module.css'

import ImgIzbornik from './ImgIzbornik';

import "aos/dist/aos.css";
import Aos from "aos"

const IzbornikOpen = () =>{
  useEffect(() => {
    Aos.init({ duration: 3000 });
}, []);

const [img, setImage] = useState("okvir1.jpg");
return(<section data-aos="fade-left"className={styles.izbornikopen}>
    <div className={styles.meni}>
    <ImgIzbornik img="okvir1.jpg" />
        <button>X</button>
        <div className={styles.blogkateg}>
        <li><a href="blog">BLOG</a></li>
            <li onClick ={() => setImage("cart.png")}>KATEGORIJE</li>
           
            <div className={styles.kateg}>   
                <li>DIPLOMA</li>
                <li>KRŠTENJE</li>
                <li><a href="rodendan">ROĐENDAN</a></li>
                <li>VALENTINOVO</li>
                <li>VJENČANJE</li>
            </div>

        </div>
    </div>
</section>
) 
}
export default IzbornikOpen;