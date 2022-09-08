import piedraImg from "./img/piedra.png";
import papelImg from "./img/papel.png";
import tijeraImg from "./img/tijera.png";
import jugar from "./jugar";


export default function PiedraPapelTijera() {
  const piedra = "piedra";
  const papel = "papel";
  const tijera = "tijera";
  let piedraBtn = () => {
    let resultado = jugar(piedra);
    let Mresultado = document.getElementById("resultado");
    Mresultado.innerHTML = resultado;
  };
  let papelBtn = () => {
    let resultado = jugar(papel);
    let Mresultado = document.getElementById("resultado");
    Mresultado.innerHTML = resultado;
  };
  let tijeraBtn = () => {
    let resultado = jugar(tijera);
    let Mresultado = document.getElementById("resultado");
    Mresultado.innerHTML = resultado;
  };
  

  


  
  return (
    <>
      <div className="container-fluid text-center">
        <h4>Elige una opcion</h4>

        <button
          className="btn-play"
          value="piedra"
          id="piedra"
          onClick={piedraBtn}
        >
          <img className="img-play" src={piedraImg} alt="" />
        </button>
        <button
          className="btn-play"
          value="papel"
          id="papel"
          onClick={papelBtn}
        >
          <img className="img-play" src={papelImg} alt="" />
        </button>
        <button
          className="btn-play"
          value="tijera"
          id="tijera"
          onClick={tijeraBtn}
        >
          <img className="img-play" src={tijeraImg} alt="" />
        </button>
      </div>

      <div className="container text-center">
        <p id="elegiste"></p>
        <p id="resultado"></p>
      </div>

      <script src="piedrapapeltijera.js"></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
      ></script>
    </>
  );
}
