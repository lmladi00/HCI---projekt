import React from 'react'

import * as styles from './style.module.css'

import logoimg from '../../images/logo1.png'

const Logo = () => (
  <section className={styles.logo}>
    <img src={logoimg} alt="description"/>
  </section>
)
export default Logo

/*
const Logo = () => (
    <section className={styles.logo}>
      <img src="https://www.instagram.com/p/CFyriF8gqmv/" alt="descr" />
    </section>
  )
  
export default Logo
*/