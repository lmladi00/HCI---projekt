import React from 'react'
  import styles from './style.module.css'
 
const navTabs = ['Privacy', 'Cookies', '2021']
 const mail2 = ['lalicreates@gmail.com']
  const Footer = () => (
    <footer className={styles.footer}>
       <ul className={styles.leftside}>
            <li className={styles.title}>
                Personalizirani okviri </li>
            <ul className={styles.phoneemail}>
            
              <li className={styles.phone}> 
              +385 91 0000000</li>

              <ul className={styles.mail}>
                {mail2.map(tab =>
                <li>{tab}</li>)
              }
              </ul>

            </ul>
            
            <li className = {styles.inst}>
                diy_lali_creates</li>
       </ul>    
       
        <ul className={styles.navigation}>
            {navTabs.map(tab =>
              <li>{tab}</li>)
            }
        </ul>
    </footer>
  )
 
  export default Footer