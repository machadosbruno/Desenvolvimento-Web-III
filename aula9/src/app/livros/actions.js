'use server'

import { prisma } from "../../../lib/prisma";

export async function Listar() {
    const livros = await prisma.livro.findMany();
    return livros;
}

export async function Pesquisar({ titulo, ano }) {
    const livros = await prisma.livro.findMany({
        where: {
            titulo: {
                contains: titulo
            },
            ...(!isNaN(Number(ano)) && {
                anoPublicacao: ano
            })
        },
        orderBy: [
            {
                titulo: "asc"
            },
            {
                anoPublicacao: "asc"
            },
        ],
        include: {
            editora: true
        }
    });
    return livros;
}

async function Validar(livro) {

    livro.titulo = livro.titulo?.trim();

    if (!livro.titulo || livro.titulo.length < 2 || livro.titulo.length > 100)
        throw new Error('Título inválido');

    if (!livro.anoPublicacao || livro.anoPublicacao < 1500 || livro.anoPublicacao > 2026)
        throw new Error('Ano de publicação inválido');

    if (livro.editoraId) {
        const editora = await prisma.editora.findUnique({
            where: {
                id: livro.editoraId
            }
        });

        if (!editora)
            throw new Error('Editora inválida');
    }

}

export async function Salvar(livro) {

    if (livro.editoraId === '')
        livro.editoraId = null;
    else
        livro.editoraId = parseInt(livro.editoraId);

    try {
        await Validar(livro);
    }
    catch (e) {
        return { sucesso: false, mensagem: e };
    }

    let resultado = null;
    try {
        resultado = await prisma.livro.create({
            data: livro
        });
    }
    catch (e) {
        console.log(e);
        return { sucesso: false, mensagem: 'Erro na inserção' };
    }

    return { sucesso: true, dados: resultado, mensagem: 'Inserção realizada com sucesso' };
}

export async function Obter(id) {
    const resultado = await prisma.livro.findUnique({
        where: {
            id: id
        }
    })

    return resultado;
}

export async function Atualizar(livro) {
    if (livro.editoraId === '')
        livro.editoraId = null;
    else
        livro.editoraId = parseInt(livro.editoraId);
    
    try {
        await Validar(livro);
    }
    catch (e) {
        return { sucesso: false, mensagem: e };
    }

    let resultado = null;
    try {
        resultado = await prisma.livro.update({
            where: {
                id: livro.id
            },
            data: { ...livro, id: undefined }
        });
    }
    catch {
        return { sucesso: false, mensagem: 'Erro na atualização' };
    }

    return { sucesso: true, dados: resultado, mensagem: 'Atualização realizada com sucesso' };
}

export async function Remover(id) {
    let resultado = null;

    try {
        resultado = await prisma.livro.delete({
            where: {
                id: id
            }
        });
    } catch { }

    if (resultado)
        return { sucesso: true };
    else
        return { sucesso: false };
}