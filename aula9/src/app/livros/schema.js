import * as yup from "yup"

export const LivroSchema = yup.object({
    titulo: yup.string()
        .min(2, 'O título deve possuir, no mínimo, 2 caracteres')
        .max(100, 'O título deve possuir, no máximo, 100 caracteres')
        .required('O título é obrigatório'),
    anoPublicacao: yup.number()
        .integer()
        .min(1500, 'O valor mínimo de ano de publicação é 1500')
        .max(2026, 'O valor máximo de ano de publicação é 2026')
        .required('O ano de publicação é obrigatório')
        .typeError('O ano de publicação é obrigatório'),
    editoraId: yup.string()
}).required();