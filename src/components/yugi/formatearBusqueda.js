function formatearBusqueda(val) {
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

export default formatearBusqueda;
