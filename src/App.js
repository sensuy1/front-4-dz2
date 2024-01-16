import React, { useState } from "react";

export default function App() {
  const [color1, setColor1] = useState("red")
  const [color2, setColor2] = useState("blue")

  const Click = () => {
    setColor1((color1) => (color1 === "red" ? "blue" : "red"))
    setColor2((color2) => (color2 === "blue" ? "red" : "blue"))
  }

  return (
    <>
      <div
        onClick={Click}
        style={{ width: 100, height: 100, background: color1, border: "3px solid black", margin: 10 }}
      ></div>

      <div
        onClick={Click}
        style={{ width: 100, height: 100, background: color2, border: "3px solid black", margin: 10 }}
      ></div>
    </>
  )
}
