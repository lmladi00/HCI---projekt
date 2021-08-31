import React from 'react'
 
import * as styles from './style.module.css';

import RodendanParagraph from '../../components/RodendanParagraph'
import RodendanPicture from '../../components/RodendanPicture'
import RodendanGrid from '../../components/RodendanGrid'

const RodendanForm = () => (
    <section  className={styles.rodendanForm}>
   
       <RodendanParagraph />
       <RodendanPicture />
       <RodendanGrid />
    </section>
)
export default RodendanForm