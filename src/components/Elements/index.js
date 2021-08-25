import React from 'react'
 
import styles from './style.module.css'
 
import messageimg from '../../images/message2.jpg'
const Elements = () => (
    <section className={styles.elements}>
     
    <a href="#questSection"><button1 id="pitanja">?</button1></a>

    <button2><img src={messageimg} alt="description"/></button2>
   
    <a href="#mark"> <button3>!</button3></a>
  
    </section>
)
 
export default Elements