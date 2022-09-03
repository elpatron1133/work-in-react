import './styles/Button.css';

export default function Button({ texto, esBotondeClick,manejarClick }) {


  
  return (
    <button
    className={esBotondeClick ? "boton-click" : "boton-reiniciar"}
    onClick={manejarClick}
    >
      {texto}
    </button>
  );
}
