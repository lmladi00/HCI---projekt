import React from 'react'
 
import * as styles from './style.module.css';

const MailGrid = () => (
    <section  className={styles.mailGrid}>
       <form>
           
                    <input name="name" type="text" placeholder="Ime i prezime" />
                      
                    <label htmlFor="email">
                    <input name="email" type="text"placeholder="Email adresa"/>
                    </label>
                    <button>Send a message</button>
            
        </form>
    </section>
   
)
export default MailGrid