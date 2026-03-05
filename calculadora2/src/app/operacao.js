import { useState } from "react";

export default function Operacao({ valor, setValor}){

    function handleClick(valorButton){
        if(valor === null){
            setValor(valorButton);
        }
    }

    return(
        <>

            <p className="visor" onChange={(e) => mudarOperacao(e.target.value)}>
                {valor}
            </p>
            <div className="linha">
                <button onClick={() => {handleClick('+')}}>
                    +
                </button>
                <button onClick={() => {handleClick('-')}}>
                    -
                </button>
            </div>


            <div className="linha">
                <button onClick={() => {handleClick('*')}}>
                    *
                </button>
                <button onClick={() => {handleClick('/')}}>
                    /
                </button>
            </div>

            
            
        </>
    );
}