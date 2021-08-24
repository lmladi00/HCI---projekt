import React, { useState, useEffect} from "react"
import * as styles from './style.module.css'

import ImgIzbornik from './ImgIzbornik';

import "aos/dist/aos.css";
import Aos from "aos"

import kategorije from '../../images/cube.png'
import blog from '../../images/slika1.jpg'
/*
const Okviri = {
    blog: {
      img: "",
      text: "kitchenText"
    },
    kategorije: {
      img: "bedroomImage",
      text: "bedroomText"
    }
  }
  */

/*
const [toggle, setToggle] = useState(true);
//const [toggle, setToggle] = useState(kategorije);
<li onClick={() => setToggle(Okviri.blog)}>BLOG</li>
<li onClick={() => setToggle(Okviri.kategorije)}>KATEGORIJE</li>
*/
/*
const IzbornikOpen = () =>{
  let kategorije ="bu"
  function Okviri (){

    kategorije="c";
  
    alert(kategorije)
    
  }
*/
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
        <a href="blog"><li>BLOG</li></a>
            <li onClick ={() => setImage("cart.png")}>KATEGORIJE</li>
           
            <div className={styles.kateg}>   
                <li>DIPLOMA</li>
                <li>KRŠTENJE</li>
                <a href="rodendan"><li>ROĐENDAN</li></a>
                <li>VALENTINOVO</li>
                <li>VJENČANJE</li>
            </div>

        </div>
    </div>
</section>
) 
}
export default IzbornikOpen;