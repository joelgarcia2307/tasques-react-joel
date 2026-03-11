import { useState } from "react";
import "./Exercici2.css";

function Exercici2() {

  const [color, setColor] = useState("gray");

  return (
    <section className="card">
      <h1>Cercle de Colors</h1>

      <div className="cercle" style={{ backgroundColor: color }}></div>

      <div className="botons">
        <button onClick={() => setColor("red")}>Vermell</button>
        <button onClick={() => setColor("green")}>Verd</button>
        <button onClick={() => setColor("blue")}>Blau</button>
      </div>
    </section>
  );
}

export default Exercici2;