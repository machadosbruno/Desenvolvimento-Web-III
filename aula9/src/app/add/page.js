'use client';

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { AtividadeSchema } from "../schema";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from 'sweetalert2';
import { Salvar } from "../actions";


export default function Novo() {
    
    const router = useRouter();
    const [busy, setBusy] = useState(false);

    const { register, handleSumit, formState: { errors } } = useForm({
        defaultValues: {
            titulo: '',
            descricao: '',
            prioridade: 'false'
        },
        resolver: yupResolver(AtividadeSchema),
    });

    const onSubmit = async (data) => {
        setBusy(true);

        try {
            const resultado = await Salvar(data);
            setBusy(false);
            if(resultado.sucesso) {
                Swal.fire({
                    text: resultado.mensagem,
                    icon: 'success',
                    timer: 3000,
                    toast: true,
                    position: "top-right",
                    showConfirmButton: false
                });
                
                router.push("../");
            }
        } catch {
            Swal.fire({
                text: "Erro ao salvar a atividade informada",
                icon: "error",
                timer: 3000,
                toast: true,
                position: "top-right",
                showConfirmButton: false
            });
        }

        setBusy(p => false);
    };
    return (
        <>
            <h1>Adicionar nova atividade</h1>
            <form>
                <div className="inputLabel">
                    Titulo:
                    <input type="text" className="input" {...register("titulo")} />
                    <p className="label">{errors?.titulo?.message}</p>
                </div>
                <div className="inputLabel">
                    Prioridade
                    <select id="prioridade" name="prioridade" className="input" {...register("prioridade")}>
                        <option value="muito_alta">Muito Alta</option>
                        <option value="alta">Alta</option>
                        <option value="padrao">Padrão</option>
                        <option value="baixa">Baixa</option>
                        <option value="muito_baixa">Muito Baixa</option>
                    </select>
                    <p className="label">{errors?.prioridade?.message}</p>
                </div>
                <div className="inputLabel">
                    Detalhes:
                    <input type="text" className="input" {...register("detalhes")} />
                    <p className="label">{errors?.detalhes?.message}</p>
                </div>
                <button type="submit" disabled={busy} >{ busy ? "..." : "Salvar" }</button>
                <Link href="../">Cancelar</Link>
            </form>
        </>
    );
}