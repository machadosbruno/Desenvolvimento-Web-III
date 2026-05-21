'use client'

import { use, useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { LivroSchema } from "../../schema";
import { Atualizar, Obter } from "../../actions";
import Swal from 'sweetalert2';
import { useRouter } from "next/navigation";
import { Listar } from "@/app/editora/actions";

export default function Novo({ params }) {

    const [busy, setBusy] = useState(false);
    const router = useRouter();
    const { id } = use(params);
    const [editoras, setEditoras] = useState([]);

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            titulo: '',
            anoPublicacao: '',
            editoraId: ''
        },
        resolver: yupResolver(LivroSchema),
    });

    const onSubmit = async (data) => {
        setBusy(true);
        data.id = parseInt(id);
        const resultado = await Atualizar(data);
        setBusy(false);

        if (resultado.sucesso) {
            if (resultado.mensagem) {
                Swal.fire({
                    text: resultado.mensagem,
                    icon: 'success',
                    timer: 3000,
                    toast: true,
                    position: "top-right",
                    showConfirmButton: false
                })
            }
            router.push("/livros");
        }
        else {
            let mensagem = "Erro ao buscar os dados";
            if (resultado.mensagem)
                mensagem = resultado.mensagem;

            Swal.fire({
                text: mensagem,
                icon: 'error',
                timer: 3000,
                toast: true,
                position: "top-right",
                showConfirmButton: false
            })
        }
    }

    const handleCarregar = async () => {
        let atual = null;
        try {
            setBusy(true);
            const idInt = parseInt(id);
            await carregarEditoras();
            atual = await Obter(idInt);
        }
        catch {
            setBusy(false);
            router.replace("/livros");
        }
        setBusy(false);
        if (atual) {
            reset({
                titulo: atual.titulo,
                anoPublicacao: atual.anoPublicacao,
                editoraId: atual.editoraId ? atual.editoraId : ''
            })
        }
        else
            router.replace("/livros");

    }

    const carregarEditoras = async () => {
        const resultado = await Listar();
        setEditoras(resultado);
    }

    useEffect(() => {
        if (id) {
            handleCarregar();
        }
    }, [id]);

    return (
        <div className="mt-2 ml-2">
            <form className=" flex flex-row gap-8" onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Título
                    <input type="text" className="bg-neutral-50 border mx-2 px-2 py-2" {...register("titulo")} />
                    <p className="text-sm text-red-600">{errors?.titulo?.message}</p>
                </label>
                <label>
                    Ano de publicação
                    <input type="number" className="bg-neutral-50 border ml-2 px-2 py-2" {...register("anoPublicacao")} />
                    <p className="text-sm text-red-600">{errors?.anoPublicacao?.message}</p>
                </label>
                <label>
                    Editora
                    <select className="bg-neutral-50 border ml-2 px-2 py-2" {...register("editoraId")}>
                        <option key={0} value=''>[Nenhuma]</option>
                        {
                            editoras?.map(p => (
                                <option key={p.id} value={p.id} label={p.nome} />
                            ))
                        }
                    </select>
                </label>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 active:bg-blue-800 disabled:bg-blue-200 ml-2" disabled={busy}>
                    {busy ? " ...... " : "Salvar"}
                </button>
            </form>
        </div>
    )
}
