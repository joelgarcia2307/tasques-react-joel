import { useState } from "react";
import "./exercici1.css";

import messi from "../../imatges/messi.jpg";
import neymar from "../../imatges/neymar.jpg";
import pedri from "../../imatges/pedri.jpg";
import yamal from "../../imatges/lamine_yamal.jpg";
import yamal2 from "../../imatges/lamine_yamal2.jpg";

function Exercici2() {

    const imatges = [messi, neymar, pedri, yamal, yamal2]

    const [index, setIndex] = useState(0)

    const seguent = () => {
        setIndex((index + 1) % imatges.length)
    }

    const anterior = () => {
        setIndex((index - 1 + imatges.length) % imatges.length)
    }

    return (
        <div style={{display:"flex", alignItems:"center", gap:"20px"}}>

            <h1>IMATGES</h1>

            <button onClick={anterior}>⬅</button>

            <img src={imatges[index]} style={{width:"300px"}} />

            <button onClick={seguent}>➡</button>

        </div>
    )
}

export default Exercici2