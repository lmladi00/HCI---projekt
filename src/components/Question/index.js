import React from 'react'
import styles from './style.module.css'
import QuestionImg from './QuestionImg';
/*import { values } from 'lodash';*/

const Question = () => (
    <section id="questSection"className={styles.contactForm}> 
        <div className={styles.quest}>
                <QuestionImg slika="quest.png" /> 
        </div>
            <div />
            <div />
        <div className={styles.question}>
            <span>Pišite nam...</span>
        <form>
            <div>
                    <input name="name" type="text" placeholder="Ime i prezime" />
                      
            </div>

            <div>  
                    <input name="email" type="text"placeholder="Email adresa"/>
            </div>

            <div className={styles.message}>
                    <input name="message" type="mess" />
            </div>

            <button>SEND</button>
        </form>
        </div>
     </section>
)
export default Question;
