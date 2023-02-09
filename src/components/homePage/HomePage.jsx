import "./stilos.css";
import Habilidades from "./components/Habilidades";
import styled from "styled-components";
export default function HomePage() {
  return (
    <ContainerApp className="container-fluid">
      <h2 className="row justify-content-center">Hola Soy David Aguilar</h2>
      <div className="row ">
        <div className="col p">
          {" "}
          Hola soy desarrollador web independiente, tengo más de 4 años de
          experiencia creando sitios en WordPress y llevo más un año aprendiendo
          programación web de manera autodidacta para poder eventualmente
          trabajar empresa tecnológica de talla internacional <br /> <br />
          Actualmente, estoy aprendiendo React y Node.js, y me gustaría poder
          aplicar lo que he aprendido en un tu Empresa o en tu proyecto. <br />{" "}
          <br />
          Soy un apasionado por las nuevas tecnologías como el Blockchain y los
          proyectos Open Source, me gusta mucho aprender cosas nuevas y me
          considero una persona con ganas de aprender algo nuevo siempre.
          <br />
          <br />
          <div className="btn">
            {" "}
            <a
              href="https://aguilar.digital/wp-content/uploads/2022/09/CV-201022.pdf"
              target="_blank"
            >
              Ver CV
            </a>{" "}
          </div>
        </div>

        <img
          className="img col-5"
          src="src/components/homePage/img/imgPage.jpg"
        />
      </div>
      <div className="row col">
        <h3>Habilidades</h3>
        <Habilidades
          titulo="REACT"
          img="react"
          descripcion="Tengo conocimientos basicos en REACT este portafolio que estas visitando esta echo en REACT utilizando VITE.js como puedes observar no es un sitio web es una progresive web app ya que al cambiar de enlace en el menu de navegacion tu navegador no recarga todo los recursos solo el que le solicitas"
        />
        <Habilidades
          titulo="HTML5"
          img="html5"
          descripcion="Tengo conocimientos en maquetacion con HTML5 Como lo puedes observar en este portafolio"
        />
        <Habilidades
          titulo="CSS3"
          img="css3"
          descripcion="De igual forma cuento con conocimientos en CCS3 para dar estilos de forma optima y moderna  en este portafolio se utilizo styled-components para dar estilos a cada componente por separado sin tener que exportar un archivo de  estilos "
        />
      </div>

      <div className="row col">
        <Habilidades
          titulo="WORDPRESS"
          img="wordpress"
          descripcion="Tengo amplio conocimiento en el desarrollo de sitios web e E-commerce en Wordpress en la personalizacion de temas de colores de funciones  utilizando CSS· y Javascript"
        />
        <Habilidades
          titulo="JAVASCRIPT"
          img="javascript"
          descripcion="tengo 2 años de experiencia tanto en este maravilloso y versatil lenguaje de programacion como vez aqui en este portafolio hay varias practicas realizadas con JS como la calculadora o la consulta a una API"
        />
        <Habilidades
          titulo="BLOCKCHAIN"
          img="blockchain"
          descripcion="Soy un apasionado por las finanzas descentralizadas  el Bitcoin y la Blockchain y cuento con conocimientos  para operar en mercados crypto utilizar Wallets de manera segura y apenas empiezo con el desarrollo de contratos inteligentes"
        />
      </div>
    </ContainerApp>
  );
}

const ContainerApp = styled.div`
.habilidades{
  background:#0d7373 ;
  margin: 10px 10px;
  padding: 20px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
}
.skillImg{
  width: 7em;
  height: 7em;
}
.btn{
  background:#0d7373;
  margin 15px 0;
}
  h2 ,h3{
    font-family: "Montserrat", sans-serif;
    color: #fff;
    font-size: 2em;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
    margin-top: 20px;
    cursor:initial;
  }
  p {
    text-align: justify;
    margin : 0 10px 20px 10px;
    font-weight: bold;
    
  }
 
`;
