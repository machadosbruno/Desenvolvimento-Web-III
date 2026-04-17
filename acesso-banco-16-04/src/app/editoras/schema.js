import * as yup from "yup"

export const editoraSchema = yup.object({
    nome: yup.string()
        .min(2, 'O título deve possuir, no mínimo, 2 caracteres')
        .max(100, 'O título deve possuir, no máximo, 100 caracteres')
        .required('O título é obrigatório'),
    sigla: yup.number()
        .integer()
        .min(1500, 'O valor mínimo de ano de publicação é 1500')
        .max(2026, 'O valor máximo de ano de publicação é 1500')
        .required('O ano de publicação é obrigatório')
        .typeError('O ano de publicação é obrigatório'),
    cidade: yup.number()
        .integer()
        .min(1500, 'O valor mínimo de ano de publicação é 1500')
        .max(2026, 'O valor máximo de ano de publicação é 1500')
        .required('O ano de publicação é obrigatório')
        .typeError('O ano de publicação é obrigatório'),
}).required();
