/**
 * Esse código é para modificar o tipo Request do express para incluir um objeto customizado,
 * neste caso, o User
 */
declare namespace Express {
    export interface Request {
        user: {
            id: string;
        }
    }
}