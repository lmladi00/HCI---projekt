import React, { useState, useEffect } from "react"
import * as styles from './style.module.css'
import { navigate } from 'gatsby'
import { document } from 'browser-monads';
 
import ImgIzbornik from './ImgIzbornik';
import "aos/dist/aos.css";
import Aos from "aos"
 
const IzbornikOpen = ({ click }) => {
    const [hover, setHover] = useState(false)
    const [hiding, setHiding] = useState(false)
 
    const onClick = () => {
        setHiding(true)
        setTimeout(() => { !!click && click() || setHiding(false) }, 2000)
    }
 
    useEffect(() => {
        Aos.init({ duration: 2000 });
            document.body.classList.add(styles.noScroll)


        return () => {
            document.body.classList.remove(styles.noScroll)
        }
    }, []);
 
    const onHovering = (e, v) => {
        setHover(v)
    }
 
    return (<section data-aos="fade-left" className={hiding ? `${styles.izbornikopen} ${styles.hiding}` : styles.izbornikopen}>
        <div className={styles.meni}>
            <ImgIzbornik img="okvir1.jpg" />
            <button onClick={onClick}>X</button>
            <div className={styles.blogkateg} >
                <li onClick={() => navigate('/blog')} style={{ transition: "ease 300" }}>BLOG</li>
                <p style={{ margin: 0 }} onMouseEnter={e => onHovering(e, true)} onMouseLeave={e => onHovering(e, false)} >
 
                    <li style={hover ? {color: 'black'} : {}}>KATEGORIJE</li>
 
                    {hover && <div className={styles.kateg} >
                        <li>DIPLOMA</li>
                        <li>KRŠTENJE</li>
                        <li style={{ transition: "ease 100ms" }} onClick={() => navigate('rodendan')}>ROĐENDAN</li>
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