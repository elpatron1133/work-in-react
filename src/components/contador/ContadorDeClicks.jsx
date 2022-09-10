import { useState } from "react";
import Button from "./Button";
import Contador  from "./Contador";


export default function ContadorDeClicks() {
  const [numeroClicks, setNumeroClicks] = useState(0);

  const manejarClick = () => {
    setNumeroClicks(numeroClicks + 1);
  };
  const multiplicarx2 = () => {
    setNumeroClicks(numeroClicks * 2);
  };
  const elevarAlCuadrado = () => {
    setNumeroClicks(numeroClicks * numeroClicks);
  };
  const multiplicarDiez = () => {
    setNumeroClicks(numeroClicks * 10);
  };
  const dividirEntreDos = () => {
    setNumeroClicks(numeroClicks / 2);
  };
  const reiniciarContador = () => {
    setNumeroClicks(0);
  };

  return (
    <>
      <Contador numeroClicks={numeroClicks} />

      <div className="contenedor-principal container">
        <Button
          texto="Click"
          esBotondeClick={true}
          manejarClick={manejarClick}
        />
        <Button
          texto="Multiplicar X2"
          esBotondeClick={false}
          manejarClick={multiplicarx2}
        />
        <Button
          texto="Al Cuadrado"
          esBotondeClick={false}
          manejarClick={elevarAlCuadrado}
        />
        <Button
          texto="X10"
          esBotondeClick={false}
          manejarClick={multiplicarDiez}
        />
        <Button
          texto="Dividir entre 2"
          esBotondeClick={false}
          manejarClick={dividirEntreDos}
        />
        <Button
          texto="Reiniciar"
          esBotondeClick={true}
          manejarClick={reiniciarContador}
        />
      </div>
    </>
  );
}
 
