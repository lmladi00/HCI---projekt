import React from 'react'

import Jezik from '../Jezik'
import Izbornik from '../Izbornik'
import IzbornikOpen from '../IzbornikOpen'
import * as styles from './style.module.css'

const Navigation = ({ setMenu }) => {

  return (<section className={styles.navigation}>
    <Jezik />
    <Izbornik onClickF={setMenu} />
  </section>
  )
}

export default Navigation