export function Boton(props) {
  const esOperador = (valor) => {
    return isNaN(valor) && (valor !== ".") && (valor !== "=");
  };

  return (
    <div
      className={`boton-contenedor ${
        esOperador(props.children) ? "operador" : ""
      }`.trimEnd()}
      onClick={() => props.manejarClick(props.children)}
    >
      {props.children}
    </div>
  );
}


export const BotonClear =(props)=>{
    return(
        <div  
        className="boton-clear"
        onClick={props.manejarClear} >
          {props.children}
        </div>
    )
}
