import { useState, useEffect } from "react";
import "./App.css";
import { images, deathMedal, winnerMedal } from "./images/index";
import { TextBox, parlaments } from "./components/textBox/TextBox";
import { CommentBox } from "./components/commentBox/CommentBox";

function App() {
  const [pets, setPets] = useState(images);
  const [textCount, setTexttextCount] = useState(0);
  const [showImages, setShowImage] = useState(false);
  const [showRules, setShowRules] = useState(true);
  const [winnerNumber, setWinnerNumber] = useState();
  const [winnerExist, setWinnerExist] = useState(false);
  const [attemps, setAttemps] = useState(0)
  const [comments, setComments] = useState([]);

  const reload = () => {
    window.location.reload(true);
  };

  const handleKill = (idx) => {
    if (idx !== winnerNumber && !winnerExist) {
      setAttemps(attemps+1)
      setComments([pets[idx].text]);
      pets.splice(idx, 1, deathMedal);
      setPets([...pets]);
    } else {
      setPets([winnerMedal]);
      setComments([winnerMedal.text]);
      setWinnerExist(true);
    }
  };
  const handleShow = () => { setShowImage(true); setShowRules(false) };
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
      <div className="bkgTitle">
        <p className="delfi"></p>
      </div>

      {showRules && <TextBox
        textCount={textCount}
        handlebutton={handlebutton}
        handleShow={handleShow}
      />}
      <div className="gameBox"></div>
      <header className="App-header">
        <div className="coinBox">
          {showImages &&
          <>
           {!winnerExist && <div className="gameRule"> Toca para alimentar a la mascota</div>}
            {pets.map((pet, idx) => (
              <img
                key={idx}
                src={pet.url}
                className="App-logo"
                alt="logo"
                onClick={() => attemps !== 3 && handleKill(idx)}
              />
            ))}
            </>}
        </div>
      </header>
      <CommentBox comments={comments} winnerExist={winnerExist} attemps={attemps}/>
      <div className="footer">
      <div className="btnContainer">
        {
        (winnerExist ||attemps === 3) ?  <button onClick={reload} className="button btn2 ">
        {winnerExist? "Volver a jugar":"Volver a intentar"}
        </button> :
        
        textCount !== parlaments.length -1 ? (
          <button className="button" onClick={handlebutton}>
            Continuar{" "}
          </button>
        ) : (
          <button className="button btn2" onClick={handleShow}>
            A Jugar
          </button>
        )}
      </div>
      </div>
    </div>
    
  );
}

export default App;
