import React from 'react'

import * as styles from './style.module.css'

import Paragraph from '../../components/Paragraph'
import Information from '../../components/Information'
import Question from '../../components/Question'
import OnlyButton from '../../components/OnlyButton'
import ImageParagraph from '../../components/ImageParagraph'

const PageContent = () => 
    <section className={styles.pageContent}>
        <Paragraph />
        <ImageParagraph />
        <OnlyButton />
        <Information />
        <Question />
    </section> 
 
export default PageContent