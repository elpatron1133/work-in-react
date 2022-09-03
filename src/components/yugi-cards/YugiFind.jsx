import {busqueda} from "./findCard"
import "./YugiFind.css"

export default function YugiFind() {
  

  return (
    <>
      <main className="app">
        <div className="container-app" >
            <h1>Buscar Carta de Yu-Gi-Oh!</h1>
            <h3>Instrucciones</h3>
            <span>
              Introduce el nombre de alguna carta por ejemplo{" "}
              <strong>dark magician, baby dragon etc</strong>
            </span>
            <br />
            <label>
              <input placeholder="Ingresa un nombre" id="input" type="text" /> 
            </label><br />
            <button className="btnSearch" id="btn" type="button" onClick={busqueda}>
              Buscar Carta!
            </button>
        </div>
        <div id="resultado"></div>
      </main>
    </>
  );
}
