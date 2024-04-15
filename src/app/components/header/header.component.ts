import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  username!: any

  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit(): void {
    this.username = sessionStorage.getItem('nom')
  }

  logout() {

    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('refreshToken');
    sessionStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['/']);
    this.authService.logout(sessionStorage.getItem('userId'))
  }

}
