import { useState } from "react";
import Tasca1 from "./components/tasca1/exercici1";
import Tasca2 from "./components/tasca1/exercici2";
import Tasca3 from "./components/tasca1/exercici3";
import Tasca4 from "./components/tasca2/exercici1";
import Tasca5 from "./components/tasca2/exercici2";

function App() {
  const [tascaSeleccionada, setTascaSeleccionada] = useState('TASCA 1');

  function getTascaComponent() { 
    switch (tascaSeleccionada) {
      case 'TASCA 1':
        return <Tasca1 />; 
      case 'TASCA 2':
        return <Tasca2 />;
      case 'TASCA 3':
        return <Tasca3 />;
      case 'TASCA 4':
        return <Tasca4 />;
      case 'TASCA 5':
        return <Tasca5 />;
    }
  }
  
  return (
    <div>
      <button onClick={() => setTascaSeleccionada('TASCA 1')}>TASCA 1</button>
      <button onClick={() => setTascaSeleccionada('TASCA 2')}>TASCA 2</button>
      <button onClick={() => setTascaSeleccionada('TASCA 3')}>TASCA 3</button>
      <button onClick={() => setTascaSeleccionada('TASCA 4')}>TASCA 4</button>
      <button onClick={() => setTascaSeleccionada('TASCA 5')}>TASCA 5</button>
      {getTascaComponent()}
    </div>
  );
}

export default App;