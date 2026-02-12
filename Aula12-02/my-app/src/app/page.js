'use client'

import { useState } from "react";

export default function Pagina(){

  const [clicks, setClicks] = useState(0);
  
  const contarClicks = () => {
    setClicks(clicks + 1);
    console.log(clicks);
    setClicks(clicks + 1);
    console.log(clicks);
  }
  return(
    <>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-300 active:bg-blue-800" onClick={contarClicks}>Clique aqui</button>
      <p>O botão foi clicado {clicks} vez(es)!</p>
    </>
  )  
}