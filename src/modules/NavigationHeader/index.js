import React from 'react'

import Navigation from '../../components/Navigation'
import Logo from '../../components/Logo'

import * as styles from './style.module.css'

const NavigationHeader = () => (
  <section className={styles.navigationHeader}>
    <Logo />
    <Navigation />
  </section>
)
export default NavigationHeader