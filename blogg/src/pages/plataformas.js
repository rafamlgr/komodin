import React from "react"
import Menu from "../components/menu"
import Footer from "../components/footer"
import PlatStyle from "./plataformas.module.css"


export default class Plataformas extends React.Component{
  render(){
    return (
      <div>
        <Menu/>
          <div className={PlatStyle.sistemas}>
            <div className={PlatStyle.imgsistemas}>
              <h1 className={PlatStyle.titulosistemas}>Plataformas</h1>
            </div>
          </div>

          <div className={PlatStyle.todossistemas}>
            <div className={PlatStyle.lego}>
              <h1>Lego</h1>
              <article className={PlatStyle.diferenca}>
                <h3>O que é?</h3>
                <p>O kit Lego Mindstorms, lançado comercialmente em 1998, é uma linha de brinquedo Lego para a Educação tecnológica. Um conjunto composto por blocos de montar, engrenagens, rodas, motores, sensores de toque, de intensidade luminosa, de temperatura, tudo controlado por um processador programável (EV3) e software pronto. </p>
              </article>

              <article className={PlatStyle.diferenca}>
                <h3>Programação</h3>
                <p>Feita com a linguagem de programação gráfica Minstorms EV3 Programming 
                Software, encontrada no site oficial da empresa Lego. É uma linguagem de 
                blocos de funcionalidades que se agrupam como um quebra-cabeça, permite 
                vários tipos de comandos tanto como a movimentação do robô quanto a leitura 
                de dados dos sensores.</p>
              </article>

              <article className={PlatStyle.diferenca}>
                <h3>Prós e contras</h3>
                <p>Esse kit se torna o mais popular por causa do seu durável hardware. Além da 
                facilidade de conseguir alterá-lo como se fosse um brinquedo de encaixar. Na sua
                versão atual, o robô pode ser controlado por dispositivos inteligentes e conexão 
                Bluetooth. Porém, tem uma limitação de peças, componentes e recursos de programação 
                e também, o preço é elevado, ou seja, tem uma difícil aquisição no mercado local.</p>
              </article> 
            </div>

            <div className={PlatStyle.arduino}>
              <h1>Arduíno</h1>
              <article className={PlatStyle.diferenca}>
                <h3>O que é?</h3>
                <p>Surgiu no ano de 2005. É uma plataforma de prototipagem eletrônica. Pode ser 
                composto uma placa eletrônica programável (microcontrolador), peças metálicas do
                tipo vigas, porcas, parafusos, arruelas, chapas, rodas, motores, correntes, sensor
                ultra-sônico, luminosidade, som, de pH e entre outros.</p>
              </article>

              <article className={PlatStyle.diferenca}>
                <h3>Programação</h3>
                <p>A linguagem oficial do Arduíno é baseada na linguagem C e C++, porém com 
                pequenas modificações e particularidades para gerar a automação, Wiring, ou 
                tmabém MiniBloq. É dividida em em três partes: estruturas, valores (variáveis e 
                constantes) e funções. O software se encontra no site oficial do Arduíno.</p>
              </article>

              <article className={PlatStyle.diferenca}>
                <h3>Prós e contras</h3>
                <p>Por ter seu hardware e software livres para serem mudados e criados, o 
                Arduíno facilita na hora de juntar sua interface com outro material, fazendo 
                uma carcaça a mão, como a sucata. O custo-benefício é baixo, mas uma das 
                desvantagens é que é necessário ter uma noção em eletrônica para construir os 
                robôs e saber usar chave de fenda e de rosca.</p>
              </article> 
            </div>
           </div>
        <Footer/>
      </div>
    );
  }
}


