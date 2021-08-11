import React, { useState } from 'react'
 
import * as styles from './style.module.css'
 
const Izbornik = () => {
  const [hover, setHover] = useState(false)
 
  return (<section className={styles.izbornik}>
    <article className={hover ? styles.hovering : ''} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div />
      <div />
      <div />
    </article>
    <span>Izbornik</span>
  </section>
  )
}
 
export default Izbornik