import React from "react"
import { Link, graphql } from 'gatsby'
import Menu from "../components/menu"
import Footer from "../components/footer"
import DicaStyle from "./dica.module.css"
import Img from 'gatsby-image'

const MontagemPage = ({ data }) => (
      <div>
        <Menu/>
          <div className={DicaStyle.dicas}>
            <div className={DicaStyle.imgdicasmont}>
              <h1 className={DicaStyle.titulodicas}>DICAS</h1>
              <h2 className={DicaStyle.subtitulodicas}>Montagem</h2>
            </div>
          </div>

         <div className={DicaStyle.todadicas}>
            {data.allStrapiDica.edges.map(document => (
            <article key={document.node.id} className={DicaStyle.boxdicas}>
              <div className={DicaStyle.fotoajuste}>
                <figure>
                <Img className={DicaStyle.fotodicas} fluid={document.node.midiaexplicacao.childImageSharp.fluid}/>
                </figure>
              </div>
              <div className={DicaStyle.inner}>
                 <h2>{document.node.titulodica}</h2>
                 <hr></hr>
                 <div className={DicaStyle.explicacao}>{document.node.explicacao}</div>
              </div>
            </article>
            ))}
          </div>
        <Footer/>
      </div>
)

export default MontagemPage

export const query = graphql`
query MyQueryMont {
  allStrapiDica(filter: {categoriadica: {eq: "Montagem"}}) {
    edges {
      node {
        id
        titulodica
        explicacao
        midiaexplicacao{
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