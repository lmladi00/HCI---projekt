import React from 'react'

import Jezik from '../Jezik'
import Izbornik from '../Izbornik'
import * as styles from './style.module.css'

const Navigation = () => (
  <section className={styles.navigation}>
    <Jezik />
    <Izbornik />
   
  </section>
)

export default Navigation