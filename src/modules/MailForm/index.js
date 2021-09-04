import React from 'react'
 
import * as styles from './style.module.css';
import MailParagraph from '../../components/MailParagraph';
import MailGrid from '../../components/MailGrid';

const MailForm = () => (
    <section  className={styles.MailForm}>
        <MailParagraph />
        <MailGrid/>
    </section>
   
)
export default MailForm