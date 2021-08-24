import React from 'react'

import Navigation from '../../components/Navigation'
import Logo from '../../components/Logo'

import * as styles from './style.module.css'

const NavigationHeader = ({ setMenu }) => (
  <section className={styles.navigationHeader}>
    <Logo />
    <Navigation setMenu={setMenu} />
  </section>
)
export default NavigationHeader