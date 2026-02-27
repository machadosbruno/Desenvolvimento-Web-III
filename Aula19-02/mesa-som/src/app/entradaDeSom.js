import { useState, useContext } from "react";
import { EnergiaContext } from "./context";

export default function EntradaDeSom(props){
    //Parametros recebidos por context
    let context = useContext(EnergiaContext);
    
    //State ligado ou não da entrada e funções para alterar o state
    const [isOn, setIsOn] = useState(false);
    const click = () => {
        isOn ? setIsOn(false) : setIsOn(true);
        isOn ? context.contar(-1) : context.contar(1);
    }
    
    //State da entrada e funções para aumentar ou diminuir o valor da entrada
    const [entrada, setEntrada] = useState(1);
    
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
          <button className={isOn ? 'volumeOn' : 'volumeOff'} onClick={click}>On/Off</button>
          <br></br>
          {
            isOn && context.energia ? <div>
                <span>{entrada}</span><br></br>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-300 active:bg-blue-800" onClick={aumentarEntrada}>+
                </button>
                <br></br>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-300 active:bg-blue-800" onClick={diminuirEntrada}>-</button>
                    {
                        entrada === 1 ? <p className="text-sm text-amber-500">Equipamento<br></br>mudo</p> :
                        entrada === 10 ? <p className="text-sm text-purple-500">Equipamento<br></br>no talo</p> : null
                    }
            </div> : <p>Entrada desligada</p>
        }
        </div>
    )
}