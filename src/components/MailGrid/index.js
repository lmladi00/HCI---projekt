import React from 'react'
 
import * as styles from './style.module.css';

const MailGrid = () => (
    <section  className={styles.mailGrid}>
       <form>
           
                    <input name="name" type="text" placeholder="Ime i prezime" />
                      
                    <label htmlFor="email"></label>
                    <input name="email" type="text"placeholder="Email adresa"/>

                    <button>Send a message</button>
            
        </form>
    </section>
   
)
export default MailGrid