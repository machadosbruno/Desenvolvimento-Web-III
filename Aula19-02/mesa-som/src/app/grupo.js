import { useState } from "react";
import EntradaDeSom from "./entradaDeSom";

export default function Grupo(){
    return(
        <>
            <EntradaDeSom nomeEntrada="Microfone" id="Mic"/>
            <EntradaDeSom nomeEntrada="Guitarra" id="Gui"/>
            <EntradaDeSom nomeEntrada="Bateria" id="Bat"/>
        </>
    )
}