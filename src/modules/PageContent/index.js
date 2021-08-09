import React from 'react'

import * as styles from './style.module.css'

import Paragraph from '../../components/Paragraph'
import Information from '../../components/Information'

const PageContent = () => 
    <section className={styles.pageContent}>
        <Paragraph />
        <Information />
    </section> 
 
export default PageContent