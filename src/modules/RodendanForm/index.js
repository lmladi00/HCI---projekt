import React from 'react'
 
import * as styles from './style.module.css';

import RodendanParagraph from '../../components/RodendanParagraph'
import RodendanPicture from '../../components/RodendanPicture'

const RodendanForm = () => (
    <section  className={styles.rodendanForm}>
       <RodendanParagraph />
       <RodendanPicture />
    </section>
)
export default RodendanForm