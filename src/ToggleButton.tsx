import React, { useState } from "react";

const ToggleButton = () => {
  const [buttonState, setButtonState] = useState("ON");

  const onButtonClick = () => {
    setButtonState(buttonState === "ON" ? "OFF" : "ON");
   
  };
  console.log("status :" + buttonState)
  return (
    <button id="A" name="B" onClick={(e) => onButtonClick()}>
      {buttonState}
    </button>
  );
};

export default ToggleButton
    
