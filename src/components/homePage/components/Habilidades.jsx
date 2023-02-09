
export default function Habilidades({titulo, descripcion,img}) {
  return (
    <>
    <div className="col habilidades">
          <h3>{titulo}</h3>
          <p>{descripcion}</p>
          <img className="skillImg" src={`/src/components/homePage/img/iconos/${img}.png`} />

        </div>
    
    </>
  )
}



