import { useState } from "react";
import "./exercici3.css";

function Exercici3() {

  const [negreta, setNegreta] = useState(false);
  const [cursiva, setCursiva] = useState(false);
  const [subratllat, setSubratllat] = useState(false);

  return (
    <section className="ex3-card">

      <h1>Format de Text</h1>

      <p
        className="ex3-text"
        style={{
          fontWeight: negreta ? "bold" : "normal",
          fontStyle: cursiva ? "italic" : "normal",
          textDecoration: subratllat ? "underline" : "none"
        }}
      >
        Lorem Ipsum
      </p>

      <div className="ex3-buttons">

        <button onClick={() => setNegreta(!negreta)}>
          Negreta
        </button>

        <button onClick={() => setCursiva(!cursiva)}>
          Cursiva
        </button>

        <button onClick={() => setSubratllat(!subratllat)}>
          Subratllat
        </button>

      </div>

    </section>
  );
}

export default Exercici3;