import ObtenerInfo  from "./informacion"




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
  //**sirve al 100 solo hay que implementar las imagenes
  
  function borrarDatos(){
    document.getElementById("resultado").innerHTML = "";
  }



export function buscar() {
  let input = document.getElementById("input").value;
  let inputUser = formatearBusqueda(input);

  borrarDatos();
  ObtenerInfo(inputUser)
}

