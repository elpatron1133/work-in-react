import React from "react";
import "./stilos.css";
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
      <div className="row">
        <h3>Habilidades</h3>
       
        <div className="col habilidades">
          <h5>React</h5>
          <p>habilidades con react descrion de las habilidadescon react descrion de las habilidadescon react descrion de las habilidades</p>
          <img className="skillImg" src="https://aguilar.digital/wp-content/uploads/2022/06/react.png" />
        </div>
        <div className="col habilidades">
          <h5>React</h5>
          <p>habilidades con react descrion de las habilidadescon react descrion de las habilidadescon react descrion de las habilidades</p>
          <img className="skillImg" src="https://aguilar.digital/wp-content/uploads/2022/06/react.png" />
        </div>
        <div className="col habilidades">
          <h5>React</h5>
          <p>habilidades con react descrion de las habilidadescon react descrion de las habilidadescon react descrion de las habilidades</p>
          <img className="skillImg" src="https://aguilar.digital/wp-content/uploads/2022/06/react.png" />
        </div>
        
        

        
      </div>


      <div className="row">
        
        <div className="col habilidades">
          <h5>React</h5>
          <p>habilidades con react descrion de las habilidadescon react descrion de las habilidadescon react descrion de las habilidades</p>
          <img className="skillImg" src="https://aguilar.digital/wp-content/uploads/2022/06/react.png" />
        </div>
        <div className="col habilidades">
          <h5>React</h5>
          <p>habilidades con react descrion de las habilidadescon react descrion de las habilidadescon react descrion de las habilidades</p>
          <img className="skillImg" src="https://aguilar.digital/wp-content/uploads/2022/06/react.png" />
        </div>
        <div className="col habilidades">
          <h5>React</h5>
          <p>habilidades con react descrion de las habilidadescon react descrion de las habilidadescon react descrion de las habilidades</p>
          <img className="skillImg" src="https://aguilar.digital/wp-content/uploads/2022/06/react.png" />
        </div>
        
        

        
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
  width: 30%;
  height: 30%px;
}
.btn{
  background:#0d7373;
  margin 15px 0;
}
  h2 ,h3{
    font-family: "Montserrat", sans-serif;
    color: #14eeee;
    font-size: 2em;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
    margin-top: 20px;
    cursor:initial;
  }
  .p {
    text-align: center;
    cursor:initial;
  }
`;
