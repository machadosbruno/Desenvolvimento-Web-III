import { useEffect, useState } from "react";

export default function Votacao() {
    const [pascal, setPascal] = useState(0);
    const [ruby, setRuby] = useState(0);
    const [resultado, setResultado] = useState("Empate");

    useEffect(() => {
        if(pascal > ruby) {
            setResultado("Pascal");
        } else if(ruby > pascal) {
            setResultado("Ruby");
        } else {
            setResultado("Empate");
        }
    }, [pascal, ruby]);

    return (
        <>
            <div className="main">
                <div className="linha">
                    <div>
                        <p onClick={() => {
                            setPascal(pascal + 1);
                        }}>Pascal</p>
                        <p>{pascal}</p>
                    </div>
                    <div>
                        <p onClick={() => {
                            setRuby(ruby + 1);
                        }}>Ruby</p>
                        <p>{ruby}</p>
                    </div>
                </div>
                <p>Linguagem Favorita: {resultado}</p>
            </div>
        </>
    )
}