'use server'

import { prisma } from "../../lib/prisma";

export async function Listar() {
    const resultado = await prisma.atividade.findMany({
        orderBy: [{
            prioridade: 'asc'
        },
        {
            titulo: 'asc'
        }]
    });
    return resultado;
}

export async function Salvar(atividade) {
    const resultado = await prisma.editora.create({
        data: atividade
    });

    return resultado
}