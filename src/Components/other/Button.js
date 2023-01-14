import React from "react";

function Buttons(props) {
  return (
    <div
      style={{
        backgroundColor: "blue",
        height: "40px",
        padding: "5px 10px",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "12px",
        cursor: "pointer",
        gap: "8px",
      }}
      onClick={() => props.click()}
    >
      <img src={props.img}  alt="button"/>
      <h3>{props.text}</h3>
    </div>
  );
}

export default Buttons;
