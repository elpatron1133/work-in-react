export default function ObtenerInfo(busquedaUsuario) {
  const URL = "https://db.ygoprodeck.com/api/v7/cardinfo.php";
  let nameCard = busquedaUsuario;

  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      const array = data.data;

      let buscar = () => {
        let resultado = array.filter((item) => item.name.includes(nameCard));
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
      buscar();
    });
}
