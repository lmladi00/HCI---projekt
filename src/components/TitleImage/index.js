import React from 'react'
 
import * as styles from './style.module.css'

import Elements from '../Elements'

const TitleImage = () => (
  <section className={styles.titleImage}>
    <div>
      <p>Personalizirani okviri</p>
      <br/> 
      <a href='../mail'><button>Naruči okvir</button></a>
    </div>
    <Elements />
  </section>
)
 
export default TitleImage