import React from 'react'
 
import * as styles from './style.module.css';

const MailGrid = () => (
    <section  className={styles.mailGrid}>
        <span> <b>OBRAZAC ZA NARUDŽBU </b></span>
        <div className={styles.grid}>
            <form>
                <div>
                    <input name="name" type="text" placeholder="Ime *" />
                </div>
                <div>
                    <input name="surname" type="text" placeholder="Prezime *" />
                </div>
                <div>
                    <input name="number" type="text"placeholder="Broj"/>
                </div>
                <div>
                    <input name="email" type="text"placeholder="Email adresa"/>
                </div>
                <div>
                    <input name="city" type="text"placeholder="Grad *"/>
                </div>
                <div>
                    <input name="country" type="text"placeholder="Država *"/>
                </div>
                <div>
                    <button>Send a message</button>
                </div>
                </form>
        </div>
    </section>
   
)
export default MailGrid