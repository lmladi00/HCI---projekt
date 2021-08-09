import React from 'react'
 
import * as styles from './style.module.css'

import messageimg from '../../images/message2.jpg'

const TitleImage = () => (
  <section className={styles.titleImage}>
    <div>
      <h1>Personalizirani okviri</h1>
      <p>okvir ponesi, osmijeh donesi</p>
      <br/>
      <br/> 
      <button>Naruči okvir</button>
    </div>
    
    <button1>?</button1>
    <button2><img src={messageimg} alt="description"/></button2>
    <button3>!</button3>

  </section>
)
 
export default TitleImage