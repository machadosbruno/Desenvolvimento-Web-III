'use server'

import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function Listar() {
    const resultado = await prisma.editora.findMany();
    return resultado;
}

export async function Salvar(editora) {
    const resultado = await prisma.editora.create({
        data: editora
    });

    return resultado;
}

export async function Obter(id) {
    const resultado = prisma.editora.findUnique({
        where: {
            id: id
        }
    });

    return resultado;
}

export async function Atualizar(editora) {
    const resultado = prisma.editora.update({
        where: {
            id: editora.id
        },
        data: { ...editora, id: undefined }
    });

    return resultado;
}

export async function Remover(id) {
    const resultado = prisma.editora.delete({
        where: {
            id: id
        }
    });
}