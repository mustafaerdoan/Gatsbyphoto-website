import React from "react"

import {graphql} from "gatsby"
import ReactDOM from 'react-dom';
import Img from "gatsby-image"
const IndexPage = ({data}) => {
 
  console.log(data)
 
 return  <div>
   
    <h1>Merhaba </h1>
    {data.allFile.edges.map(({node}) =>{
    return  <Img key={node.id} fluid={node.childImageSharp.fluid}></Img>
    })}
  </div>
}


export const pageQuery =graphql
{
    allFile(
      filter: {absolutePath: {regex: "//photos//"}}) 
 {
    edges 
     {
      node 
       {
          id
        childImageSharp 
         {
          fluid 
           {
             GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
export default IndexPage