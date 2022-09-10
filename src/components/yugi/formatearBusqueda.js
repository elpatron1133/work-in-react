import ObtenerInfo from "./informacion";

function borrarDatos() {
  document.getElementById("resultado").innerHTML = "";
}
//*esta funcion realiza la busqueda con el input formateado gracias a funcion anterior
export function buscar() {
  let input = document.getElementById("input").value.toLowerCase();
  //*la primer funcion simplemente borra los datos que se encuentran en el div resultado y la segunda es una funcion importada
  //*de otro archivo que realiza la busqueda y la muestra en el div resultado mas informacion en dicha funcion
  borrarDatos();
  ObtenerInfo(input);
}
