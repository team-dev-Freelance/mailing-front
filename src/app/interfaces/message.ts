import { User } from "./user"

export interface Message {
    id?: number,
    emailExpediteur: string,
    objet: string,
    content: string,
    statut: any,
    urlsJointPiecesstring?: string[],
    date: string,
    utilisateur: User
}
