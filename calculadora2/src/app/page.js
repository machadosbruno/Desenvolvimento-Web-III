'use client';

import React from "react";
import Digito from "./digito";
import Operacao from "./operacao";
import { useState } from "react";

export default function Home() {
  
  const [valor1, setValor1] = useState(null);
  const [valor2, setValor2] = useState(null);
  const [operacao, setOperacao] = useState(null);

  let resultado = null;

  const calcular = () => {
    if((valor1 != "" && valor1 != null) && (valor2 != "" && valor2 != null) && (operacao != "" && operacao != null)){
      if(operacao === '+'){
        resultado = valor1 + valor2;
      }
      else if(operacao === '-'){
        resultado = valor1 + valor2;
      }
      else if(operacao === '*'){
        resultado = valor1 * valor2;
      }
      else if(operacao === '/' && valor2 > 0){
        resultado = valor1 / valor2;
      }
    }  
  }

  return (
    <>
        <Digito valor={valor1} setValor={setValor1}/>
        <Operacao valor={operacao} setValor={setOperacao}/>
        <Digito valor={valor2} setValor={setValor2}/>
        <button onClick={calcular}>=</button>
        {resultado !== null ? <p>{resultado}</p> : <p>Escolha os valores corretamente</p> }
    </>
  );
}
