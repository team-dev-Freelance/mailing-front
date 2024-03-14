import { User } from "./user"

export interface Message {
    id?:number,
    object ?: string,
    description:string
    from:User,
    to:User,
    createdAt? : any,
    status : string
    
}
