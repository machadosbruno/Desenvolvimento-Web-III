'use client';

import { use, useEffect, useState } from "react";
import Swal from 'sweetalert2';
import { Listar, Remover } from "./actions";
import Link from "next/link";

export default function Livros() {

    const [busy, setBusy] = useState(false);
    const [dados, setDados] = useState([]);
    const [atualizar, setAtualizar] = useState(true);

    const handleAtualizar = async () => {
        setBusy(true);

        try {
            const livros = await Listar();
            setDados(livros);
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

    const handleRemover = async (id) => {
        const resposta = confirm('Deseja realmente remover este livro?');
        if (resposta) {
            setBusy(true);
            const resultado = await Remover(id);
            if (resultado.sucesso) {
                setAtualizar(true);
                Swal.fire({
                    text: "Livro removido com sucesso",
                    icon: 'success',
                    timer: 3000,
                    toast: true,
                    position: "top-right",
                    showConfirmButton: false
                })
            }
            else {
                Swal.fire({
                    text: "Erro ao remover o livro informado",
                    icon: 'error',
                    timer: 3000,
                    toast: true,
                    position: "top-right",
                    showConfirmButton: false
                })
            }
            setBusy(false);
        }
    }

    useEffect(() => {
        if (atualizar)
            handleAtualizar();
    }, [atualizar]);

    return (
        <div>

            <p>Livros disponíveis</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 active:bg-blue-800 disabled:bg-blue-200" disabled={busy} onClick={() => { setAtualizar(true) }}>
                {busy ? " ...... " : "Atualizar"}
            </button>
            <Link className="ml-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 active:bg-blue-800 disabled:bg-blue-200" href={"/livros/novo"}>Novo</Link>

            <table className="w-full">
                <thead>
                    <tr>
                        <td>Título</td>
                        <td>Ano de Publicação</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        dados.map((p) => {
                            return (
                                <tr key={p.id}>
                                    <td>{p.titulo}</td>
                                    <td>{p.anoPublicacao}</td>
                                    <td><Link href={`/livros/editar/${p.id}`} className="text-blue-600 pl-2">Editar</Link></td>
                                    <td><a href="#" className="text-red-600 pl-2" onClick={() => { handleRemover(p.id) }}>Remover</a></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}
