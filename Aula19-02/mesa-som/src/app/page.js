'use client'

import Grupo from "./grupo";
import { EnergiaContext } from "./context";
import { useState } from "react";

export default function som(){
  const [isOn, setIsOn] = useState(false);
  const [energia, setEnergia] = useState(false)
        
  const click = () => {
      isOn ? setIsOn(false) : setIsOn(true);
      isOn ? setEnergia(false) : setEnergia(true);
      if( isOn ) { setAtivos(0); }
  }

  const [ativos, setAtivos] = useState(0);

  const contar = (v) => {
    setAtivos(p => p + v);
  }
  return (
    <>
      <h1>Volumes</h1>
      <button className={isOn ? 'volumeOn' : 'volumeOff'} onClick={click}>On/Off</button>
        <br></br>
        {
          energia && <p>Há {ativos} equipamentos ligados!</p>
        }
        <br></br>
        {
          isOn ? <div className="volumes">
          <EnergiaContext.Provider value={{energia: energia, contar}}>
            <Grupo />
          </EnergiaContext.Provider>  
          </div> : <p>Mesa de som desligada</p>
        }
      
      
    </>
  )
}