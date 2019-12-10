import React from "react"
import { graphql } from "gatsby"
import Menu from "../components/menu"
import Footer from "../components/footer"
import DownStyle from "./down.module.css"


const DownPage = ({ data }) => (
      <div>
        <Menu/>
          <div className={DownStyle.down}>
            <h1 className={DownStyle.titulodown}>DOWNLOADS</h1>
        </div>
  
      <div className={DownStyle.todadown}>
        {data.allStrapiDownload.edges.map(document => (
        <article key={document.node.id} className={DownStyle.boxdown}>
          <div className={DownStyle.square}>
            <div className={DownStyle.innerdown}>
              <h3>{document.node.nomedownload}</h3>
              <a className={DownStyle.icon} href={document.node.arquivo.relativePath} download></a>
            </div>
          </div>
        </article>
        ))}
        
      </div> 

      <Footer/>
      </div>
)

export default DownPage


export const query = graphql`
query MyQueryDown{
allStrapiDownload {
    edges {
      node {
        id
        nomedownload
        arquivo {
          relativePath
        }
      }
    }
  }
}
`
