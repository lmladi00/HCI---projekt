import React from 'react'
 
import * as styles from './style.module.css';

import okvir4 from '../../images/okvir4.jpg'
import okvir5 from '../../images/okvir5.jpg'
import GridBlog from './GridBlog'

const BlogGrid = () => (
    <section  className={styles.blogGrid}>
            <div className="grid-container">
                <div className="grid item grid item-a">
                <img src={okvir4} alt="description"/>
                </div>
                <div className="grid item grid item-b">
                <img src={okvir4} alt="description"/>
                </div>
                <div className="grid item grid item-c">
                <img src={okvir4} alt="description"/>
                </div>
                <div className="grid item grid item-d">
                <img src={okvir4} alt="description"/>
                </div>
                <div className="grid item grid item-e">
                <img src={okvir4} alt="description"/>
                </div>
                <div className="grid item grid item-f">
                <img src={okvir4} alt="description"/>
                </div>
                <div className="grid item grid item-g">
                <img src={okvir4} alt="description"/>
                </div> 
                <div className="grid item grid item-h">
                <img src={okvir4} alt="description"/>
                </div> 
              
              
        </div>

    </section>
)
export default BlogGrid  