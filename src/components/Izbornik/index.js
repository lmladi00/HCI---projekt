import React, { useState } from 'react'

import * as styles from './style.module.css'
 
const Izbornik = () => {
  const [hover, setHover] = useState(false)
  const [open, setOpen] = useState(false)
  /*const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  */
 /*
  
 */
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