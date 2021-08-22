import React, { useEffect } from "react"

import * as styles from './style.module.css'

import ImgParag2 from './ImgParag2';

import "aos/dist/aos.css";
import Aos from "aos"

const ImageParagraph2 = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
}, []);
return(
    <section data-aos="fade-up" className={styles.imageParagraph2}>
      <p>VALENTINOVO</p>
        <div className={styles.title}>
          <ImgParag2 img="slika1.jpg"  tekst>
            <span>Vaš partner/ica obožava <br/> personalizirane poklone? <br/> Nemate ideje što dečku/curi <br/> kupiti za Valentinovo?<br/> Na pravom ste mjestu!<br/> Karikature kreiram sama, <br/> a Vi sami prilagođavate okvir<br/> prema Vašim željama.</span>
          </ImgParag2>  
        </div>
    </section>
  );
};
  export default ImageParagraph2

  /*     <h2>KRŠTENJE</h2>    */