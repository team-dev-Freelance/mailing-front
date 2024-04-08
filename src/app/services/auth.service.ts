import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map, of } from 'rxjs';
import {   api as apiConfig} from './../constant';
import { ServicesService } from './services.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public host = `${apiConfig.baseUrl}`;
  loading = false;

  constructor(private http: HttpClient, private router: Router,private adminService: ServicesService){}
  

 

  public register(url: string, data: any): Observable<any> {
    const httpOptions: any = {
      observe: 'response',
      responseType: 'json'
    };
    return this.http.post<any[]>(this.host + url, data, httpOptions);
  }

  login(data: any): Observable<any> {

    const url = `${apiConfig.auth.login}`;

    const httpOptions = {
     // withCredentials: true,
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      // observe: 'response',
      // responseType: 'json'
    };

    return this.http
      .post<any>(this.host + url, data, httpOptions)
      .pipe(
        map((user) => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          // console.log('USER: ', user);

          if (!user) {
            this.loading = false;
            this.router.navigate(['']);
          } else {
            
            
            // Setting token access and session variables
            sessionStorage.setItem('accessToken', user.access_token);
            sessionStorage.setItem('refreshToken', user.refresh_token);
            sessionStorage.setItem('role', user.role);
            sessionStorage.setItem('userId', user.id);
            // sessionStorage.setItem('userId', user.id);
            return user;
          }
        })
      );
  }


  logout(userId: any) {
    const url = `${apiConfig.auth.logout}`;

    this.adminService.getResource(url, userId).subscribe((data: any) => {
      let res: any = data;
      if (res.status == 200) {
        // remove user from local storage to log user out
        // localStorage.removeItem('currentUser');
        sessionStorage.removeItem('accessToken');
       sessionStorage.removeItem('refreshToken');
        sessionStorage.clear();
        this.router.navigate(['/']);
      } else {
        // this.notify.error('Server Error!', 'Une erreur interne est suvenue au niveau du serveur. Veuillez recommencer !');
      }
    });
    return of({ success: false });
  }

}
