import * as yup from "yup"

export const AtividadeSchema = yup.object({
    titulo: yup.string()
        .min(1, 'O título deve possuir, no mínimo, 1 caracteres')
        .max(500, 'O título deve possuir, no máximo, 100 caracteres')
        .required('O título é obrigatório'),
    descricao: yup.string()
        .min(1, 'A descrição deve possuir, no mínimo, 1 caracteres')
        .max(500, 'A descrição deve possuir, no máximo, 500 caracteres')
        .required('A descrição é obrigatória'),
    prioridade: yup.string()
        .oneOf(['muito_alta', 'alta', 'padrao', 'baixa', 'muito_baixa'], 'Valor de prioridade inválido')
        .required('A prioridade é obrigatória')
})