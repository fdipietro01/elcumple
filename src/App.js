import { useState, useEffect } from "react";
import "./App.css";
import { images, deathMedal, winnerMedal } from "./images/index";

function App() {
  const parlaments = [
    {
      text: "Bienvenida al juego de la pista oculta: Una de nuestras mascotas, a cambio de su comida favorita, va a darte la pista que necesitas para encontrar su regalo.",
    },
    {
      text: "Pero cuidado, no todas nuestras mascotas toleran esa comida. Podrías envenenar a alguna. Tenés 3 oportunidades. Suerte!",
    },
    {
      text: "(Tenés que tocar en cada mascota para alimentarlo)",
    },
  ];
  const [pets, setPets] = useState(images);
  const [textCount, setTexttextCount] = useState(0);
  const [showImages, setShowImage] = useState(false);
  const [winnerNumber, setWinnerNumber] = useState();
  const [winnerExist, setWinnerExist] = useState(false);
  const [comments, setComments] = useState([]);

  const reload = () => {
    window.location.reload(true);
  };
  const handleKill = (idx) => {
    if (idx !== winnerNumber && !winnerExist) {
      setComments([...comments, pets[idx].text]);
      pets.splice(idx, 1, deathMedal);
      console.log(pets);
      setPets([...pets]);
    } else {
      setPets([winnerMedal]);
      setComments([winnerMedal.text]);
      setWinnerExist(true);
    }
  };
  const handleShow = () => setShowImage(true);
  const handlebutton = () => {
    setTexttextCount(textCount + 1);
  };

  useEffect(() => {
    const winnerIdx = Math.floor(Math.random() * pets.length);
    setWinnerNumber(winnerIdx);
  }, []);
  return (
    <div className="App">
      <p className="Tittle"> FELIZ CUMPLEAÑITOS</p>
      <p className="Tittle"> MARÍA DELFINA DOLORES</p>

      <div className="TextContainer">
        {parlaments.map(({ text }, idx) => {
          if (idx <= textCount) {
            return (
              <div class="text-typing">
                <div className="Text text-typing-son">{text}</div>
              </div>
            );
          }
        })}
      </div>
      <div className="btnContainer">
        {textCount !== parlaments.length ? (
          <button className="button" onClick={handlebutton}>
            Continuar{" "}
          </button>
        ) : (
          <button className="button btn2" onClick={handleShow}>
            A Jugar
          </button>
        )}
      </div>

      <header className="App-header">
        <div className="coinBox">
          {showImages &&
            pets.map((pet, idx) => (
              <img
                src={pet.url}
                className="App-logo"
                alt="logo"
                onClick={() => comments.length !== 3 && handleKill(idx)}
              />
            ))}
        </div>
        {comments.length === 3 && (
          <div className="endGame">
            <p className="Tittle">Juego Terminado</p>
            <button onClick={reload} className="button btn2 btn3">
              Volver a Jugar
            </button>
          </div>
        )}
      </header>
      <div className="TextContainer SpeedText">
        {comments.map((text, idx) => (
          <div class="text-typing">
            <div className="Text text-typing-son">
              Intento n° {idx + 1}: {text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
