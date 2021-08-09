import React from 'react'

import * as styles from './style.module.css'

import logoimg from '../../images/logo1.png'
import { Link } from 'gatsby'

const Logo = () => (
  <Link to = {'/'}>
  <section className={styles.logo}> 
    <img src={logoimg} alt="description"/>
  </section>
  </Link>
)
export default Logo





/*
const refreshPage = ()=>{
  window.location.reload();
}

const Logo = () => (
  <Link to = {'/'}>
  <section className={styles.logo}> 
    <button onClick={refreshPage}><img src={logoimg} alt="description"/></button>
  </section>
  </Link>
)
export default Logo
*/

/*
const Logo = () => (
    <section className={styles.logo}>
      <img src="https://www.instagram.com/p/CFyriF8gqmv/" alt="descr" />
    </section>
  )
  
export default Logo
*/