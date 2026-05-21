'use client'

import { useState } from "react"

import Swal from 'sweetalert2';
import { useRouter } from "next/navigation";
import { Salvar } from "../actions";
import { useForm } from "react-hook-form";
import { EditoraSchema } from "../schema";
import { yupResolver } from "@hookform/resolvers/yup"

export default function Novo() {

    const router = useRouter();

    const [busy, setBusy] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            nome: '',
            sigla: '',
            cidade: ''
        },
        resolver: yupResolver(EditoraSchema),
    });

    const onSubmit = async (data) => {
        setBusy(true);

        try {
            const resultado = await Salvar(data);
            if (resultado) {
                Swal.fire({
                    text: 'Editora salva com sucesso',
                    icon: 'success',
                    timer: 3000,
                    toast: true,
                    position: "top-right",
                    showConfirmButton: false
                })
                router.push("/editora");
            }
        }
        catch {
            Swal.fire({
                text: "Erro ao salvar a editora informada",
                icon: 'error',
                timer: 3000,
                toast: true,
                position: "top-right",
                showConfirmButton: false
            })
        }

        setBusy(p => false);
    }

    return (
        <div className="mt-2 ml-2">
            <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-row">
                <div className="flex flex-col space-y-1 text-right">
                    <label>
                        Nome
                        <input type="text" className="bg-neutral-50 border mx-2 px-2 py-2" {...register("nome")} />
                        <p className="text-sm text-red-600">{errors?.nome?.message}</p>
                    </label>
                    <label>
                        Sigla
                        <input type="text" className="bg-neutral-50 border mx-2 px-2 py-2" {...register("sigla")} />
                        <p className="text-sm text-red-600">{errors?.sigla?.message}</p>
                    </label>
                    <label>
                        Cidade
                        <input type="text" className="bg-neutral-50 border mx-2 px-2 py-2" {...register("cidade")} />
                        <p className="text-sm text-red-600">{errors?.cidade?.message}</p>
                    </label>
                    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 active:bg-blue-800 disabled:bg-blue-200 ml-2" disabled={busy}>
                        {busy ? " ...... " : "Salvar"}
                    </button>
                </div>
            </form>
        </div>
    )
}
