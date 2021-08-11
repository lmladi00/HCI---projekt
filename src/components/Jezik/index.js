import React, { useState } from 'react'

import * as styles from './style.module.css' 

const Jezik = () => {
    const [hover, setHover] = useState(false)
    return (<section className={styles.jezik}>
       <span className={styles.jezik}>hrv</span>
        <article className={hover ? styles.hovering : ''} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
          <div />
          <div />
        </article>
      </section>
      )
}
export default Jezik

