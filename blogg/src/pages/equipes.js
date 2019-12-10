import React from "react"
import { graphql } from "gatsby"
import Menu from "../components/menu"
import Footer from "../components/footer"
import EquipeStyle from "./equipe.module.css"
import Img from 'gatsby-image'

const Equipe = ({ data }) => (
      <div>
        <Menu/>
            <div className={EquipeStyle.equipes}>
                    <div className={EquipeStyle.imgequipes}>
                      <div className={EquipeStyle.capa}></div>
                    </div>
              </div>
                <h1 className={EquipeStyle.tituloequipes}>EQUIPES</h1>

                <div className={EquipeStyle.todasequipes}>
                {data.allStrapiEquipe.edges.map(document => (
                  <article key={document.node.id} className={EquipeStyle.boxequipes}>
                      <div className={EquipeStyle.fotoajuste}>
                            <figure>
                            <Img className={EquipeStyle.fotoequipe} fluid= {document.node.imgequipe.childImageSharp.fluid}/>
                            </figure>
                          </div>
                    <div className={EquipeStyle.inner}>           
                    <a>{document.node.nomeequipe}</a>
                    <p>{document.node.textoequipe}</p>
                    </div>
                  </article>
                ))}
              </div>

        <Footer/>
      </div>
)

export default Equipe


export const query = graphql`
query MyQueryEquipes{
  allStrapiEquipe {
    edges {
      node {
        nomeequipe
        textoequipe
        id
        imgequipe {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid 
            }
          }     
        }
      }
    }
  }
}
`