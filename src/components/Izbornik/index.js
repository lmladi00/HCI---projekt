import React, { useState } from 'react'

import * as styles from './style.module.css'
 
const Izbornik = ({ onClickF }) => {
  const [hover, setHover] = useState(false)
  const [open, setOpen] = useState(false)
  /*const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  */
 /*
  
 */
function handleClick(){
  if(!open){
    setOpen(true)
  } else {
    setOpen(false)
  }
}
/*
function handleCLick()
{
  setOpen(true);

}
*/
 return (<section onClick={onClickF} className={styles.izbornik}>

    <article className={hover ? styles.hovering : ''} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false) } onClick={handleClick}>
    <div />
    <div />
    <div />
  </article>
  
  <span style={{ zIndex: 200 }}>Izbornik</span>
</section>
)
}
export default Izbornik