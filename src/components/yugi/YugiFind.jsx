import "./styles/YugiFind.css";
import { buscar } from "./formatearBusqueda";
import "bootstrap/dist/css/bootstrap.min.css";

export function YugiFind() {
  return (
    <>
      <div className="container-app">
        <h1>Buscar Carta de Yu-Gi-Oh!</h1>
        <h3>Instrucciones</h3>
        <span>
          Introduce el nombre en mayusculas o minusculas de alguna carta por ejemplo{" "}
          <strong>dark magician, baby dragon ,blue-eyes white dragon </strong> <br />si el nombre incluye guion debes agregarlo sej <strong>"red-eyes"</strong> 
        </span>
        <br />
        <label>
          <input
            placeholder="Ingresa un nombre"
            id="input"
            type="text"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                buscar();
              }
            }}
          />
        </label>
        <br />
        <button className="btnSearch" id="btn" type="button" onClick={buscar}>
          Buscar Carta
        </button>
      </div>
      <div id="resultado"></div>
      <script src="formatearBusqueda.js"></script>
    </>
  );
}
