import { useState } from "react";
import "./exercici1.css";

import messi from "../../imatges/messi.jpg";
import neymar from "../../imatges/neymar.jpg";
import pedri from "../../imatges/pedri.jpg";
import yamal from "../../imatges/lamine_yamal.jpg";
import yamal2 from "../../imatges/lamine_yamal2.jpg";

function Exercici1() {
    const [imatges, setImatges] = useState([messi, neymar, pedri, yamal, yamal2]);

    return (
        <div>
            {imatges.map((imatge) => {
                return (
                    <div>
                        <img src={imatge} style={{width: "450px"}}/>
                    </div>
                )
            })}
        </div>       
    );
}
export default Exercici1