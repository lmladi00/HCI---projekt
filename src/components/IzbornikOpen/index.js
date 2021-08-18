import React from 'react'
import * as styles from './style.module.css'

const IzbornikOpen = () =>

<section className={styles.izbornikopen}>   
    <div className={styles.meni}>
        <button>X</button>
        <div className={styles.blogkateg}>
            <li>BLOG</li>
            <li>KATEGORIJE</li>
        </div>
    </div>
</section>

export default IzbornikOpen;