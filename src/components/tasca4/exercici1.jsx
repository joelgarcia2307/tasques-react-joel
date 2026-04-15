import "./exercici1.css";
import jaguar from "../../imatges/jaguar.jpg";
import tigre from "../../imatges/tigre.jpg";
import elefants from "../../imatges/elefants.jpg";
import pingu from "../../imatges/pingui.jpg";
import cangur from "../../imatges/cangur.jpg";

function Card({ imatge, titol, text, textBoto1, link1, textBoto2, link2 }) {
  return (
    <div className="card">
      <img src={imatge} alt={titol} />
      <h2>{titol}</h2>
      <p>{text}</p>

      <a href={link1} target="_blank" rel="noreferrer">
        <button>{textBoto1}</button>
      </a>

      <a href={link2} target="_blank" rel="noreferrer">
        <button>{textBoto2}</button>
      </a>
    </div>
  );
}

function Exercici1() {
  return (
    <div className="contenidor">

      <Card
        imatge={jaguar}
        titol="JAGUAR"
        text="El jaguar (Panthera onca) és el felí més gran d'Amèrica i el tercer del món, caracteritzat pel seu cos robust, pelatge amb rosetes negres, comportament solitari i excel·lent capacitat per a nedar i grimpar. És un superdepredador nocturn amb la mossegada més potent entre els felins, capaç de perforar closques de tortugues i cranis de caimans."
        textBoto1="Imatges"
        link1="https://pixabay.com/es/images/search/jaguar/"
        textBoto2="Més Informació"
        link2="https://es.wikipedia.org/wiki/Panthera_onca"
      />

      <Card
        imatge={tigre}
        titol="TIGRE"
        text="El tigre (Panthera tigris) és una de les espècies de la subfamília dels panterinos (família Felidae) pertanyents al gènere Panthera. Se li troba solament en el continent asiàtic; és un depredador carnívor i és l'espècie de félido més gran del món."
        textBoto1="Imatges"
        link1="https://pixabay.com/es/images/search/tigre/"
        textBoto2="Més Informació"
        link2="https://es.wikipedia.org/wiki/Panthera_tigris"
      />

      <Card
        imatge={elefants}
        titol="ELEFANT"
        text="Els elefants són grans mamífers terrestres de l'ordre dels proboscidis. N'hi ha tres espècies vivents: l'elefant africà de sabana, l'elefant africà de bosc i l'elefant asiàtic (també conegut com a «elefant de l'Índia»). Altres espècies de proboscidis s'han extingit des de l'últim període glacial. Els mamuts, les formes nanes dels quals podrien haver sobreviscut fins al 2000 aC,[1] són els més coneguts. Antigament se'ls classificava, juntament amb altres animals de pell gruixuda, dins l'ordre actualment descartat dels paquiderms."
        textBoto1="Imatges"
        link1="https://www.istockphoto.com/es/fotos/elephant"
        textBoto2="Més Informació"
        link2="https://ca.wikipedia.org/wiki/Elefants"
      />

      <Card
        imatge={pingu}
        titol="PINGÜÍ"
        text="Els pingüins són un grup d'espècies d'ocells no voladors que habiten l'hemisferi sud. Contràriament a la creença popular, els pingüins no habiten únicament en climes freds. Moltes espècies de pingüins habiten fins a les Illes Galàpagos. La majoria dels pingüins s'alimenten de krill, peix, calamars i altres criatures marines que capturen en les seves immersions submarines."
        textBoto1="Imatges"
        link1="https://pixabay.com/es/images/search/penguins/"
        textBoto2="Més Informació"
        link2="https://ca.wikipedia.org/wiki/Ping%C3%BCins"
      />

      <Card
        imatge={cangur}
        titol="CANGUR"
        text="Els cangurs són marsupials que habiten Austràlia. Un cangur és qualsevol dels grans macròpodes (el grup de marsupials que inclou també els ualabis i els cangurs arborícoles, amb 45 espècies en total). El terme cangur és a vegades utilitzat en un sentit més ample per a referir-se a tots els membres de la família dels macropòdids."
        textBoto1="Imatges"
        link1="https://pixabay.com/es/images/search/canguro/"
        textBoto2="Més Informació"
        link2="https://ca.wikipedia.org/wiki/Cangurs"
      />

    </div>
  );
}

export default Exercici1;