export default function ObtenerInfo(busquedaUsuario) {
  //*esta funcion es la que realiza la busqueda y muestra los datos en el div resultado
  //*se obtiene la informacion en un array gracias a fetch
  const URL = "https://db.ygoprodeck.com/api/v7/cardinfo.php";
  let nameCard = busquedaUsuario;

  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      const array = data.data;

      //*y se filtra la busqueda usando el metodo filter y el resultado se muestra en el div resultado gracias a forEach
      let buscarInt = () => {
        let resultado = array.filter((item) => item.name.toLowerCase().includes(nameCard));
        resultado.forEach((card) => {
          let name = card.name;
          let type = card.type;
          let img = document.createElement("img");
          img.src = card.card_images[0].image_url;
          const content = document.createElement("div");
          content.className = "img-item";
          content.innerHTML = `
          <h3>${name}</h3>
          <img src="${img.src}" alt="${name}}" />
          <p>${type}</p>
    
          `;

          document.getElementById("resultado").appendChild(content);
        });
      };
      buscarInt();
    });
}
