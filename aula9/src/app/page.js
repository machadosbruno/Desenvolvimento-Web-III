'use client'

import Link from "next/link";
import { Listar } from "./actions";
import { useState, useEffect } from "react";
import Swal from 'sweetalert2';

export default function Home() {
  const [busy, setBusy] = useState(false);
  const [dados, setDados] = useState([]);
  const [atualizar, setAtualizar] = useState(true);
  
  const handleAtualizar = async () => {
    setBusy(true);

    try {
      const resultado = await Listar();
      setDados(resultado);
      console.log(resultado);
    }
    catch {
      Swal.fire({
        text: "Erro ao buscar os dados",
        icon: 'error',
        timer: 3000,
        toast: true,
        position: "top-right",
        showConfirmButton: false
      })
    }

    setAtualizar(false);
    setBusy(false);
  }

  const handleAdicionar = () => {
    // Lógica para adicionar uma nova atividade
  }

  useEffect(() => {
    if (atualizar) {
      handleAtualizar();
    }
  }, [atualizar]);
  return(
    
    <>
      <h1>Atividades</h1>

      <h2>Atividades a realizar: </h2>
      <div className="atividades">
        {
          dados.map((atividade) => {
            <div className="atividade" key={atividade.id}>
              <input type="checkbox" checked={atividade.realizada} readOnly></input>
              <h2>{atividade.titulo}</h2>
              <p>{atividade.descricao}</p>  
              
            </div>
          })
        }
      </div>
      <Link href={"/add"}>Adicionar nova atividade</Link>  
    </>
  )
}