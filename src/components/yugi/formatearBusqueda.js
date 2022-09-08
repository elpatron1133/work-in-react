import ObtenerInfo from "./informacion";

//* Esta funcion formatea la busqueda que ingrese el usuario para coicidir con los parametros de la API
export function formatearBusqueda(val) {
  const formatearBusquedaInt = () => {
    const palabras = val
      .toLowerCase()
      .split(" ")
      .map((palabra) => {
        return palabra[0].toUpperCase() + palabra.substring(1);
      })
      .join(" ");
    let res = palabras;
    return res;
  };
  let busqueda = formatearBusquedaInt();
  return busqueda;
}

function borrarDatos() {
  document.getElementById("resultado").innerHTML = "";
}
//*esta funcion realiza la busqueda con el input formateado gracias a funcion anterior
export function buscar() {
  let input = document.getElementById("input").value;
  let inputUser = formatearBusqueda(input);
  //*la primer funcion simplemente borra los datos que se encuentran en el div resultado y la segunda es una funcion importada
  //*de otro archivo que realiza la busqueda y la muestra en el div resultado mas informacion en dicha funcion
  borrarDatos();
  ObtenerInfo(inputUser);
}
