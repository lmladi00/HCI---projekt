import React from 'react'
import styles from './style.module.css'
import QuestionImg from './QuestionImg';

const Question = () =>
    <section className={styles.contactForm}> 
        <div className={styles.quest}>
                <QuestionImg slika="quest.png" /> 
        </div>
            <div />
            <div />
        <div className={styles.question}>
            <span>Pišite nam...</span>
        <form>
            <div>
                    <input name="name" type="text" value="Ime i prezime" />
            </div>

            <div>  
                    <input name="email" type="text" value="Email adresa"/>
            </div>

            <div className={styles.message}>
                    <input name="message" type="mess" />
            </div>

            <button>SEND</button>
        </form>
        </div>
     </section>

export default Question;
