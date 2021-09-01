import React, { useEffect }  from 'react'
 
import * as styles from './style.module.css';

import "aos/dist/aos.css";
import Aos from "aos"

import okvir4 from '../../images/okvir4.jpg'
import okvir5 from '../../images/okvir5.jpg'
import GridBlog from './GridBlog'

const BlogGrid = () => {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);
    return(
    <section  className={styles.blogGrid}>
            <div className="grid-container">
                <div data-aos="fade-up" className="grid item grid item-a">
              
                </div>
                <div data-aos="fade-up" className="grid item grid item-b">
             
                </div>
                <div data-aos="fade-up" className="grid item grid item-c">
                    <li><p>Okvir i cvijeće</p>
                    <span>Pročitaj više...</span>
                    </li>
                </div>
                <div data-aos="fade-up" className="grid item grid item-d">
              
                </div>
                <div data-aos="fade-up" className="grid item grid item-e">
              
                </div>
                <div data-aos="fade-up" className="grid item grid item-f">
               
                </div>
                <div data-aos="fade-up" className="grid item grid item-g">
          
                </div> 
                <div data-aos="fade-up" className="grid item grid item-h">
                <ul><p>Važnost bijele pozadine</p>
                    <span>Pročitaj više...</span>
                    </ul>
                </div>                        
        </div>
    </section>
    );
};

export default BlogGrid  