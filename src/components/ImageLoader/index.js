import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
 
const ImageLoader= ({ imageName }) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile {
        nodes {
          childImageSharp {
              fluid(maxWidth: 800) {
                originalName,
                ...GatsbyImageSharpFluid
              }
            }
        }
      }
    }
  `)
 
 
 
  const myImage = data.allFile.nodes.find(el => el.childImageSharp.fluid.originalName === imageName)
 
  return myImage ? <Img fluid={myImage.childImageSharp.fluid} /> : null
}
 
export default ImageLoader