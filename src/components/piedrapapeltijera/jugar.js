import "./style/PiedraPapelTijera.css";

const piedra = "piedra";
const papel = "papel";
const tijera = "tijera";

function jugar(opcion) {
  var opcionMaquina = Math.floor(Math.random() * 3) + 1;
  if (opcionMaquina === 1) {
    opcionMaquina = "piedra";
  } else if (opcionMaquina === 2) {
    opcionMaquina = "papel";
  } else {
    opcionMaquina = "tijera";
  }
  let opcionJugador = opcion;
  let ganador =
    opcionJugador === opcionMaquina
      ? "Empate"
      : opcionJugador === piedra && opcionMaquina === papel
      ? "Pierdes!!! Gano la Maquina"
      : opcionJugador === piedra && opcionMaquina === tijera
      ? "Ganaste"
      : opcionJugador === papel && opcionMaquina === piedra
      ? "Ganaste"
      : opcionJugador === papel && opcionMaquina === tijera
      ? "Pierdes!!! Gano la Maquina"
      : opcionJugador === tijera && opcionMaquina === piedra
      ? "Pierdes!!! Gano la Maquina"
      : opcionJugador === tijera && opcionMaquina === papel
      ? "ganaste"
      : null;

  return `Elegiste: <img  class="img-play" src="https://aguilar.digital/wp-content/uploads/2022/09/${opcionJugador}.png"
  >
         La maquina Eligio: <img  class="img-play" src="https://aguilar.digital/wp-content/uploads/2022/09/${opcionMaquina}.png"
         alt="${opcionMaquina}">
          ${ganador}`;
}

export default jugar;
