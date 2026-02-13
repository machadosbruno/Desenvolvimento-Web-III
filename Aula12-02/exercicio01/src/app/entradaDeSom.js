import { useState } from "react";

export default function EntradaDeSom(props){
    const [entrada, setEntrada] = useState(0);
    
    const aumentarEntrada = () => {
    if(entrada < 10){
        setEntrada(e => e + 1);
    }
    }
    const diminuirEntrada = () => {
    if(entrada > 0){
        setEntrada(e => e - 1);
    }
    }

    return(
        <div>
          <p>Entrada {props.numEntrada}:</p>
          <span>{entrada}</span><br></br>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-300 active:bg-blue-800" onClick={aumentarEntrada}>^</button>
          <br></br>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-300 active:bg-blue-800" onClick={diminuirEntrada}>v</button>
        </div>
    )
}