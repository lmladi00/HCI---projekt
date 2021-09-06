import React, {useState} from 'react'
 
import * as styles from './style.module.css';

const MailGrid = () => {
    const [isChecked, setIsChecked] = useState(false)
  
    return (<section  className={styles.mailGrid}>
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
                    <input name="number" type="text"placeholder="Adresa stanovanja *"/>
                </div>
                <div>
                    <input name="email" type="text"placeholder="Poštanski broj *"/>
                </div>
                <div>
                    <input name="city" type="text"placeholder="Grad *"/>
                </div>
                <div>
                    <input name="phonenumber" type="text"placeholder="Broj mobitela" />
                </div>
                <div>
                    <input name="email" type="text"placeholder="Email adresa *"/>
                </div>
                <div>
                    <input name="category" type="text"placeholder="Kategorija"/>
                </div>
                <div>
                    <input name="pay" type="text"placeholder="Način plaćanja"/>
                </div>
                <div>
                    <textarea name="text" type="text"/>
                </div>
              
                
                </form>
                <div className = {styles.check}>
                    
                    <br/>
                  
                    <input id="checked" type="radio" style={isChecked ? {background:'pink', backgroundColor: 'black'} : {}} checked={isChecked} onChange={(e)=>{setIsChecked(e.target.checked)}} />
                      <label>Pristajem da se moji podatci obrađuju u svrhu izvršenja narudžbe. Podatci će biti izbrisani 12 mjeseci nakon što je proces završen.</label>
                    <br />
                
                </div>
                <div>
                    <button>SEND</button>
                </div>

               
        </div>
    </section>
    )
   
}
export default MailGrid
