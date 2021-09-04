import React from 'react'
 
import * as styles from './style.module.css';
import { Link } from 'gatsby'

const MailParagraph = () => (
    <section  className={styles.mailParagraph}>
        <div>
       <span>Osmijeh donesi, okvir ponesi</span>
       <p>
            Hvala Vam što ste odabrali lali_creates i odabrali svijet 
            personaliziranih okvira, osmišljenih s puno ljubavi i pažnje, 
            a i malo mašte. 
            Kako biste izvršili narudžbu, potrebno je ispuniti 
        <b> obrazac za narudžbu</b>, nakon kojeg Vam na e-mail dolazi potvrda o 
            izvršenoj narudžbi kao i podatci za plaćenje. 

            
            Za bilo kakva pitanja i informacije s povjerenjem obratite nam 
            se na našu email adresu ili nas posjetite na instagramu 
            <Link to ={'https://www.instagram.com/diy_lali_creates/'}>lali_creates.</Link>
        </p>
        </div>
    </section>
   
)
export default MailParagraph

/*
import React from 'react'
 
import * as styles from './style.module.css';

const MailParagraph = () => (
    <section  className={styles.mailParagraph}>
        <div>
       <p>Osmijeh donesi, okvir ponesi</p>
       <span>
           Hvala Vam što ste odabrali lali_creates i odabrali svijet <br/>
           personaliziranih okvira, osmišljenih s puno ljubavi i pažnje, <br/>
           a i malo mašte. <br/>
       <br/>
       Kako biste izvršili narudžbu, potrebno je ispuniti <br/>
       <b>obrazac za narudžbu</b>, nakon kojeg Vam na e-mail dolazi potvrda o <br/>
       izvršenoj narudžbi kao i podatci za plaćenje. <br/>

       <br/>
       Za bilo kakva pitanja i informacije s povjerenjem obratite nam <br/>
       se na našu email adresu ili nas posjetite na instagramu <br/>
       lali_creates. 
        </span>
        </div>
    </section>
   
)
export default MailParagraph
*/