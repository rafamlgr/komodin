import React from "react"
import FooterStyle from "./footer-style.module.css"


export default class Footer extends React.Component{

	render(){
		return(
		<div>
	    <footer className={FooterStyle.pagefooter}>
	      	<div className={FooterStyle.formafooter}></div>
	      	    <div className={FooterStyle.endereco}>
	      	    	<h5>Endereço e Contato</h5>
	      	    	<table>
	      	    		<tr align ="center">
	      	    			<td className={FooterStyle.arrumartop}>R. Filinto Müller, 1790 - Canaã I, Dourados-MS</td><td className={FooterStyle.arrumartop}>(67) 3410-8500</td>
	      	    		</tr>
	      	    		<tr align="center">
	      	    			<td className={FooterStyle.arrumarbot}>79833-520</td>
	      	    			<td className={FooterStyle.arrumarbot}>dourados@ifms.edu.br</td>
	      	    		</tr>
	      	    	</table>
	      	    </div>
	            <div className={FooterStyle.container}> 
	            © 2018 copyright text
	            </div>
	       </footer>
        </div>
		)
	}
}