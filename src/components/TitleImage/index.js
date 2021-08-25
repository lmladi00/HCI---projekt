import React from 'react'
 
import * as styles from './style.module.css'

import Elements from '../Elements'

const TitleImage = () => (
  <section className={styles.titleImage}>
    <div>
      <p>Personalizirani okviri</p>
      <br/> 
      <button>Naruči okvir</button>
    </div>
    <Elements />
  </section>
)
 
export default TitleImage