import React from 'react'
 
import * as styles from './style.module.css';
import RodendanEl from './RodendanEl'

const RodendanPicture = () => (
    <section  className={styles.rodendanPicture}>
               <RodendanEl slika="okvir1.jpg" ></RodendanEl>
               <p>Okvir ponesi, osmijeh donesi.</p>
    </section>
)
export default RodendanPicture