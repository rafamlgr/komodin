import React from "react"
import { graphql } from "gatsby"
import Menu from "../components/menu"
import Footer from "../components/footer"
import IndexStyle from "./index.module.css"
import Img from 'gatsby-image'

const IndexPage = ({ data }) => (
      <div>
        <Menu/>
            <div className={IndexStyle.topo}>
                <div className={IndexStyle.imgtopo}></div>
                <div className={IndexStyle.historiatopo}>
                  <div className={IndexStyle.formatopo}>
                    <div className={IndexStyle.hist}>
                      <h2 className={IndexStyle.titulohistoria}>Nossa história</h2>
                      <p>A estrutura e a montagem do grupo começou em 2016 com o 
                      professor Evandro Falleiros, logo após, em 2017 e adiante, Jónison 
                      Almeida assumiu o cargo de treinador. Em todo esse tempo, em nossa 
                      primeira competição ficamos em 9º lugar estadual, segunda 7º e 
                      terceira 16º, e ganhamos dois anos consecutivos a medalha de 
                      Robustez. Além de participar da OBR, também presenciamos o 
                      RoboÁra, Gamefica, Douranime, Fecigran, AliançaNerd e ministramos 
                      curso para universitários de Física e Matemática da UEMS. 
                      Atualmente, nosso grupo é composto por 28 alunos</p>
                    </div>
                  </div>
                </div>
              </div>

              <h1>Membros</h1> 
              <div className={IndexStyle.membros}>
                {data.allStrapiMembro.edges.map(document => (
                  <article key={document.node.id} className={IndexStyle.item}>
                      <Img className={IndexStyle.img} fluid= {document.node.imgmembro.childImageSharp.fluid}/>
                      <div className={IndexStyle.inner}>
                        <h3>{document.node.apelido}</h3>
                        <p>{document.node.nomecompleto}</p>
                      </div>
                    </article>
                  ))}
                </div>
    
                <h1>Ex-Membros</h1>
                <div className={IndexStyle.membros}>
                {data.allStrapiExmembro.edges.map(document => (
                  <article className={IndexStyle.item}>
                      <Img className={IndexStyle.img} fluid= {document.node.imgex.childImageSharp.fluid}/>
                      <div className={IndexStyle.inner}>
                        <h3>{document.node.apelidoex}</h3>
                        <p>{document.node.nomeex}</p>
                      </div>
                    </article>
                  ))}
                </div>
        <Footer/>
      </div>
)

export default IndexPage

export const query = graphql`
query MyQueryIndex {
  allStrapiMembro {
    edges {
      node {
        apelido
        id
        nomecompleto
        imgmembro {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
  allStrapiExmembro {
    edges {
      node {
        id
        nomeex
        apelidoex
        imgex{
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
