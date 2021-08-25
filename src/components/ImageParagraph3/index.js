import React, { useEffect } from "react"

import * as styles from './style.module.css'

import ImgParag3 from './ImgParag3';

import "aos/dist/aos.css";
import Aos from "aos"

const ImageParagraph3 = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
}, []);
return(
    <section data-aos="fade-up" className={styles.imageParagraph3}> 
        <div className={styles.title}>
          <p>ROĐENDAN</p>
          <ImgParag3 img="slika1.jpg"  tekst>
            <span>Nemate više ideje što <br/> pokloniti nekome za <br/> rođendan? Želite pokloniti <br/> neku uspomenu za cijeli <br/> život? Na pravome ste <br/> mjestu. Svaki okvir <br/>prilagođen je Vašim <br/> željama, samo izaberite Vaš <br/>omiljeni dizajn i razveselite <br/> svoje najmilije.</span>
          </ImgParag3>  
        </div>

    </section>
  );
};
  export default ImageParagraph3

  /*     <h2>KRŠTENJE</h2>    */