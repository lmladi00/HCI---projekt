import React from 'react'

import * as styles from './style.module.css'

import Paragraph from '../../components/Paragraph'
import Information from '../../components/Information'
import OnlyButton from '../../components/OnlyButton'

const PageContent = () => 
    <section className={styles.pageContent}>
        <Paragraph />
        <ImageParagraph />
        <OnlyButton />
        <Information />
    </section> 
 
export default PageContent