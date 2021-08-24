import React from 'react'
 
import * as styles from './style.module.css'

import messageimg from '../../images/message2.jpg'

const TitleImage = () => (
  <section className={styles.titleImage}>
    <div>
      <h1>Personalizirani okviri</h1>
      <br/> 
      <button>Naruči okvir</button>
    </div>
    
    <section className={styles.elements}>
     
    <a href="#questSection"><button1 id="pitanja">?</button1></a>

    <button2><img src={messageimg} alt="description"/></button2>
   
    <a href="#mark"> <button3>!</button3></a>
  
    </section>

  </section>
)
 
export default TitleImage