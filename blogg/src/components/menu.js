import React from "react"
import MenuStyle from "./menu-style.module.css"


export default class Menu extends React.Component{

	render(){
		return(
		<div>
        <header>
        <a href="/" className={MenuStyle.logo}>Komodo</a>
          <div>
            <ul>
              <li><a href="equipes">Equipes</a></li>
              <li><a>Dicas</a>
                  <div className= {MenuStyle.submenu}>
                    <a href="dica-programacao">Programação</a>
                    <a href="dica-montagem">Montagem</a>
                  </div>
              </li>
              <li><a href="plataformas">Plataformas</a></li>
              <li><a href="down">Downloads</a></li>
              <li><a href="midias">Mídia</a></li>
            </ul>
          </div>
        </header>
        </div>
		)
	}
}