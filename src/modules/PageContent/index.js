import React from 'react'

import * as styles from './style.module.css'

import Paragraph from '../../components/Paragraph'
import Information from '../../components/Information'
import Question from '../../components/Question'
import OnlyButton from '../../components/OnlyButton'
import ImageParagraph from '../../components/ImageParagraph'
import ImageParagraph2 from '../../components/ImageParagraph2'
import ImageParagraph3 from '../../components/ImageParagraph3'
import InfoMark from '../../components/InfoMark'
import Dots from '../../components/Dots'
const PageContent = () => 
    <section className={styles.pageContent}>
        <Paragraph />
        <ImageParagraph />
        <ImageParagraph2 />
        <ImageParagraph3 />
        <Dots/>
        <OnlyButton />
     
        <InfoMark />
        <Information />
        <Question />
      
    </section> 
 
export default PageContent