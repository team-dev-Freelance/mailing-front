const STATUS_MESSAGE = [
    "lu",
    "brouillon",
    "envoyer",
    "important"
]
    
import { environment } from '../environments/environment';
if (typeof window !== 'undefined') {
  // Votre code qui utilise window.location ici
  const loc = window.location;
  const currentBaseUrl = `${loc.protocol}//${loc.hostname}:${loc.port}`;
}







/**
 * API settings
 */
export const api = {

  baseUrl: 'http://localhost:8080/api/v1/',
 

  home: {},

  auth: {
    login: 'auth/authenticate',
    logout: 'auth/logout',
    register: 'auth/register',
  },

  admin: {
   
    user: {
      create: '',
      getOne: 'admin/user/findByEmail/',
      getOneId: 'admin/user/findById',
      getAll: 'admin/user/findAll',
      update: '',
      delete: ''
    },
  },
  message: {
    create: 'user/mail/add/',
    getBoite: 'user/mail/boite/',
    getAllStatus: 'user/mail/findByStatut/',
    update: 'user/mail/update/',
    deleteMail: 'user/mail/deleteOneMail/',
    deleteUsersMail: 'user/mail/deleteBoiteUser/'
  },

};
