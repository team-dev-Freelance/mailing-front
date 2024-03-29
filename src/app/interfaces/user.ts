export interface User {
    id? : number,
    nom: string,
    password :string,
    email: string,
    active?: boolean,
    role?: string,
}
