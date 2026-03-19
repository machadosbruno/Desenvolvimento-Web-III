import Reiniciar from "./reiniciar";
import { useEffect, useState } from "react";

export default function Votacao() {
    const [bootstrap, setbootstrap] = useState(0);
    const [Materialize, setMaterialize] = useState(0);
    const [Tailwind, setTailwind] = useState(0);
    const [encerrado, setEncerrado] = useState(false);
    const [resultado, setResultado] = useState("");

    useEffect(() => {
        if(bootstrap == 10 || Materialize == 10 || Tailwind == 10) {
            setEncerrado(true);
            if(bootstrap > Materialize && bootstrap > Tailwind) {
                setResultado("Linguagem Favorita: bootstrap");
            } else if(Materialize > bootstrap && Materialize > Tailwind) {
                setResultado("Linguagem Favorita: Materialize");
            } else if(Tailwind > bootstrap && Tailwind > Materialize) {
                setResultado("Linguagem Favorita: Tailwind");
            }
        }    
    }, [bootstrap, Materialize, Tailwind]);

    const reiniciarVotacao = () => {
        setbootstrap(0);
        setMaterialize(0);
        setTailwind(0);
        setEncerrado(false);
        setResultado("");
    }

    return (
        <>
            <div className="main">
                <div className="linha">
                    <div>
                        <p onClick={() => {
                            !encerrado ? setbootstrap(bootstrap + 1) : null;
                        }}>Bootstrap</p>
                        <p className={!encerrado ? "votosInativos" : "votosAtivos"}>{bootstrap}</p>
                    </div>
                    <div>
                        <p onClick={() => {
                            !encerrado ? setMaterialize(Materialize + 1) : null;
                        }}>Materialize</p>
                        <p className={!encerrado ? "votosInativos" : "votosAtivos"}>{Materialize}</p>
                    </div>
                    <div>
                        <p onClick={() => {
                            !encerrado ? setTailwind(Tailwind + 1) : null;
                        }}>Tailwind</p>
                        <p className={!encerrado ? "votosInativos" : "votosAtivos"}>{Tailwind}</p>
                    </div>
                </div>
                <p>{resultado}</p>
                <Reiniciar encerrado={encerrado} reiniciarVotacao={reiniciarVotacao} />
            </div>
        </>
    )
}
