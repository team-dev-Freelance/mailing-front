export const environment = {};

export  const baseURL ="http://localhost:8080";


export const apiRoute  =`${baseURL}/api/`
export const routesAPI = {
    MESSAGE :{
        FIND_ALL : apiRoute +"",
        GET : apiRoute +"",
        SAVE : apiRoute +"",
        SEND : apiRoute +"",
        READ : apiRoute +"",
        DRAFT : apiRoute +"",
        IMPORTANT : apiRoute +"",
        
    },
    USER :{
        GET : apiRoute+ ""
    }
}