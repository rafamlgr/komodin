import React from "react"
import {graphql } from "gatsby"
import Menu from "../components/menu"
import Footer from "../components/footer"
import MStyle from "./midia.module.css"
import Img from 'gatsby-image'


const MidiasPage = ({ data }) => (
      <div>
        <Menu/>
          <div className={MStyle.midia}>
            <h1 className={MStyle.titulomidia}>MÍDIAS</h1>
        </div>
  
      <div className={MStyle.todamidias}>
        {data.allStrapiMidia.edges.map(document => (
        <article key={document.node.id} className={MStyle.boxmidia}>
          <Img className={MStyle.img} fluid={document.node.imgmidia.childImageSharp.fluid}/>
        </article>
        ))} 
      </div> 

      <Footer/>
      </div>
)

export default MidiasPage


export const query = graphql`
query MyQueryMidias{
 allStrapiMidia {
    edges {
      node {
        id
        imgmidia {
          childImageSharp {
            fluid(maxWidth: 2000){
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
}
`
