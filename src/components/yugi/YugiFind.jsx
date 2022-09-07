import "./styles/YugiFind.css";
import formatearBusqueda from "./formatearBusqueda";



export default function YugiFind() {
  

function buscar (){
let input = document.getElementById("input").value
let inputUser = formatearBusqueda(input)

  console.log(inputUser);
}
  

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
            <button className="btnSearch" id="btn" type="button" onClick={buscar} >
              
              Buscar Carta
            </button>
        </div>
        <div id="resultado"></div>
        <script src="formatearBusqueda.js"></script>
      </main>
    </>
  );
}
