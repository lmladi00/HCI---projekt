import React, { useState, useEffect } from "react"
import * as styles from './style.module.css'
import { navigate } from 'gatsby'

import ImgIzbornik from './ImgIzbornik';
import { Link } from 'gatsby';
import "aos/dist/aos.css";
import Aos from "aos"

const IzbornikOpen = () => {
    const [hover, setHover] = useState(false)

    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);

    const onHovering = (e, v) => {
        setHover(v)
    }

    const [img, setImage] = useState("okvir1.jpg");
    return (<section data-aos="fade-left" className={styles.izbornikopen}>
        <div className={styles.meni}>
            <ImgIzbornik img="okvir1.jpg" />
            <a href="/"> <button>X</button></a>
                <div className={styles.blogkateg} >
                <li onClick={() => navigate('blog')} style={{ transition: "ease 300"}}>BLOG</li>
                <p style={{ margin: 0 }} onMouseEnter={e => onHovering(e, true)} onMouseLeave={e => onHovering(e, false)} >

                    <li >KATEGORIJE</li>

                    {hover && <div className={styles.kateg} >
                        <li>DIPLOMA</li>
                        <li>KRŠTENJE</li>
                        <li style={{transition: "ease 100ms"}}onClick={() => navigate('rodendan')}>ROĐENDAN</li>
                        <li>VALENTINOVO</li>
                        <li>VJENČANJE</li>
                    </div>}
                </p>

            </div>
        </div>
    </section >
    )
}
export default IzbornikOpen;

/*onClick={() => setImage("cart.png")}*/