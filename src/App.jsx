import { useState } from "react";
import Tasca1_Exercici1 from "./components/tasca1/exercici1";
import Tasca1_Exercici2 from "./components/tasca1/exercici2";
import Tasca1_Exercici3 from "./components/tasca1/exercici3";
import Tasca2_Exercici1 from "./components/tasca2/exercici1";
import Tasca2_Exercici2 from "./components/tasca2/exercici2";
import Tasca3_Exercici1 from "./components/tasca3/exercici1";

function App() {
  const [tascaSeleccionada, setTascaSeleccionada] = useState('TASCA 1');

  function getTascaComponent() { 
    switch (tascaSeleccionada) {
      case 'TASCA 1':
        return ( 
        <div>
          <Tasca1_Exercici1 />
          <Tasca1_Exercici2 />
          <Tasca1_Exercici3 />
        </div>
        ); 
      case 'TASCA 2':
        return ( 
        <div>
          <Tasca2_Exercici1 />
          <Tasca2_Exercici2 />
        </div>
        ); 
      case 'TASCA 3':
        return ( 
        <div>
          <Tasca3_Exercici1 />
        </div>
        ); 
    }
  }
  
  return (
    <div>
      <button onClick={() => setTascaSeleccionada('TASCA 1')}>TASCA 1</button>
      <button onClick={() => setTascaSeleccionada('TASCA 2')}>TASCA 2</button>
      <button onClick={() => setTascaSeleccionada('TASCA 3')}>TASCA 3</button>
      {getTascaComponent()}
    </div>
  );
}

export default App;