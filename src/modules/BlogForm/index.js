import React from 'react'
 
import * as styles from './style.module.css';

import BlogPicture from '../../components/BlogPicture'

import Paragraph from '../../components/Paragraph'
import BlogGrid from '../../components/BlogGrid';

const BlogForm = () => (
    <section  className={styles.blogForm}>
      
      <BlogPicture />
      <Paragraph />
      <BlogGrid />
     
    </section>
   
)
export default BlogForm