import React, { useState} from "react"
import * as styles from './style.module.css'

import ImgIzbornik from './ImgIzbornik';

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
const [img, setImage] = useState("okvir1.jpg");
return(<section className={styles.izbornikopen}>
    <div className={styles.meni}>
    <ImgIzbornik img="okvir1.jpg" />
        <button>X</button>
        <div className={styles.blogkateg}>
            <li>BLOG</li>
            <li onClick ={() => setImage("cart.png")}>KATEGORIJE</li>
           
            <div className={styles.kateg}>   
                <li>DIPLOMA</li>
                <li>KRŠTENJE</li>
                <li>ROĐENDAN</li>
                <li>VALENTINOVO</li>
                <li>VJENČANJE</li>
            </div>

        </div>
    </div>
</section>
) 
}
export default IzbornikOpen;