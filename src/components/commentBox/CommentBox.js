export const CommentBox = ({ comments, winnerExist, attemps }) => {

  console.log(comments.length, winnerExist)
  return (
    <>
      {(winnerExist || attemps === 3)  && (
      <div className="endGame">
        <p className="Tittle2">{winnerExist? "¡Felicitaciones!":"¡Perdiste!"}</p>
      </div>
      )}    
      <div className="TextContainer SpeedText">
        {comments.map((text, idx) => (
          <div key={idx} className="text-typing">
            <div className="Text text-typing-son">
              {!winnerExist? `Intento n° ${attemps}: ${text}` : `${text}`} 
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
