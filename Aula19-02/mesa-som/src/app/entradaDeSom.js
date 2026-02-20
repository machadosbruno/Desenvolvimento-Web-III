import { useState } from "react";
import IsOn from './onOff';

export default function EntradaDeSom(props){
    const [entrada, setEntrada] = useState(0);
    
    const aumentarEntrada = () => {
    if(entrada < 10){
        setEntrada(e => e + 1);
    }
    }
    const diminuirEntrada = () => {
    if(entrada > 1){
        setEntrada(e => e - 1);
    }
    }

    return(
        <div>
          <p className="volume">{props.nomeEntrada}:</p>
          <IsOn/>
          <br></br>
          <span>{entrada}</span><br></br>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-300 active:bg-blue-800" onClick={aumentarEntrada}>+
          </button>
          <br></br>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-300 active:bg-blue-800" onClick={diminuirEntrada}>v</button>
            {
                entrada === 1 ? <p className="text-sm text-amber-500">Equipamento mudo</p> :
                entrada === 10 ? <p className="text-sm text-purple-500">Equipamento no talo</p> : null
            }
          
        </div>
    )
}