import React from 'react'
import * as styles from './style.module.css'

import ImgIzbornik from './ImgIzbornik';

const IzbornikOpen = () =>

<section className={styles.izbornikopen}> 
    <div>
    <ImgIzbornik img="okvir1.png" />
    </div> 
    <div className={styles.meni}>
        <button>X</button>
        <div className={styles.blogkateg}>
            <li>BLOG</li>
            <li>KATEGORIJE</li>
            <div className={styles.kateg}>   
                <li>KRŠTENJE</li>
                <li>VJENČANJE</li>
                <li>ROĐENDAN</li>
                <li>VALENTINOVO</li>
                <li>DIPLOMA</li>
            </div>

        </div>
    </div>
</section>

export default IzbornikOpen;