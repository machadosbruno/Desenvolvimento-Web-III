'use client'

import EntradaDeSom from './entradaDeSom';
import { useState } from "react";

export default function som(){
  const microfone = document.getElementById("Mic");
  const guitarra = document.getElementById("Gui");
  const bateria = document.getElementById("Bat");
  const [isOn, setIsOn] = useState(false);
      
  const click = () => {
      if(isOn){
          setIsOn(false);
          microfone.className = "volumeOn";
      }
      else{
          setIsOn(true);
      }

  }
  return (
    <>
      <h1>Volumes</h1>
      <button className={isOn ? 'volumeOn' : 'volumeOff'} onClick={click}>On/Off
      </button>
      <div className="volumes">
        <EntradaDeSom nomeEntrada="Microfone" id="Mic"/>
        <EntradaDeSom nomeEntrada="Guitarra" id="Gui"/>
        <EntradaDeSom nomeEntrada="Bateria" id="Bat"/>
      </div>
    </>
  )
}