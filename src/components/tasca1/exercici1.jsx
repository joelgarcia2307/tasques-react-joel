import { useState } from "react";
import "./exercici1.css";

function Exercici1() {

  const [comptador, setComptador] = useState(0);

  function incrementar() {
    setComptador(comptador + 1);
  }

  function decrementar() {
    setComptador(comptador - 1);
  }

  function reset() {
    setComptador(0);
  }

  let color;
  if (comptador > 0) color = "green";
  else if (comptador < 0) color = "red";
  else color = "black";

  return (
    <section className="card">
      <h1>Comptador Interactiu</h1>

      <div id="valor" className="pantalla" style={{ color }}>
        {comptador}
      </div>

      <div className="botons">
        <button className="decrementar" onClick={decrementar}>
          - Decrementar
        </button>

        <button className="reset" onClick={reset}>
          Reiniciar
        </button>

        <button className="incrementar" onClick={incrementar}>
          + Incrementar
        </button>
      </div>
    </section>
  );
}

export default Exercici1;