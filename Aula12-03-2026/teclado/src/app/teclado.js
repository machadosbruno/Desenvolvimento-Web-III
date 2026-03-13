import { useState } from "react";

export default function Teclado() {
  const [visor, setVisor] = useState("");
  const letras = [
    'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
    'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ç',
    'z', 'x', 'c', 'v', 'b', 'n', 'm'
  ];
  const [caps, setCaps] =  useState(false);
  const [shift, setShift] = useState(false);
  const valorBackSpace = "<-";
  const valorSpace = "Space";
  const valorClear = "Limpar";

  const handleClick = (v) => {
    setValor(v)
  }

  const handleCaps = () => {
    caps ? setCaps(false) : setCaps(true);
  }

  const handleShift = () => {
    shift ? setShift(false) : setShift(true);
  }
  
  const handleBackSpace = () => {
    alterarVisor(valorBackSpace);
  }

  const handleSpace = () => {
    alterarVisor(valorSpace);
  }

  const handleClear = () => {
    alterarVisor(valorClear);
  }

  const alterarVisor = (v) => {
    if(v == "<-"){
      if(visor.length > 1){
        setVisor(visor.substring(0, visor.length-1));
      }
      else{
        setVisor("");
      }
    }
    else{
      if(v == "Space"){
        if(visor.length > 1){
            let final = visor.length -1;
            let inicio = visor.length -2;
            if(visor.substring(inicio, final) != " "){
                setVisor(visor + " " + "");
            }
        }
        else {
            if(visor != " "){
                setVisor(visor + " " + "");
            }
        }
      }
      else{
        if(v == "Limpar"){
            setVisor("");
        }
        else{
            if(caps){
                v = v.toUpperCase();
            }
            if(shift && caps){
                v = v.toLowerCase();
                setShift(false);
            }
            else if(shift && !caps){
                v = v.toUpperCase();
                setShift(false);
            }
            setVisor(visor + v);
        }
      }
    }
  }
  
  return (
    <>
      <div className="main">
        <p className="display">{visor}</p>
        <div className="teclado">
            {
            letras.map(p => (
                <button key={p} className="tecla" onClick={() => {alterarVisor(p)}}>{p}</button>
            ))
            }
        </div>
        <button className="especiais" onClick={handleCaps}>Caps Lock</button>
        <button className="especiais" onClick={handleShift}>Shift</button>
        <button className="especiais" onClick={handleBackSpace}>{valorBackSpace}</button>
        <button className="especiais" onClick={handleSpace}>{valorSpace}</button>
        <button className="especiais" onClick={handleClear}>{valorClear}</button>
      </div>
    </>
  );
}
