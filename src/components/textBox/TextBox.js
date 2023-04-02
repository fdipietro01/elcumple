import React from "react";

export const parlaments = [
    {
      text: "¡Bienvenida al juego de la pista oculta!",
    },
    {
        text: `Una de nuestras mascotas, a cambio de su comida favorita, va a darte la pista que necesitas para encontrar su regalo.`,
      },
    {
      text: "Pero cuidado, no todas nuestras mascotas toleran esa comida. Podrías envenenar a alguna. Tenés 3 oportunidades. Suerte!",
    },
    {
      text: "(Tenés que tocar en cada mascota para alimentarlo)",
    },
  ];
export const TextBox = ({textCount, handleShow, handlebutton}) => {
   
  return (
    <>
      <div className="TextContainer">
        {parlaments.map(({ text }, idx) => {
          if (idx <= textCount) {
            return (
              <div key={idx} className="text-typing">
                <div className="Text text-typing-son">{text}</div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};
