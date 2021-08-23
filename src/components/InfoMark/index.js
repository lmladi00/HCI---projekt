import React from 'react'

import * as styles from './style.module.css'
import InfoEl from '../Information/InfoEl'
const InfoMark = () => (
    <section  id="mark" className={styles.infomark}>
        <div className={styles.info}>
            <InfoEl slika="info.png" /> 
        </div>
    </section>
  )
  export default InfoMark