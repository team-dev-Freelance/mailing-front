import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './pages/auth/auth.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, CommonModule,AuthComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  public url: boolean = true

  constructor(private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    const url = window.location.href;
    const urlObj = new URL(url);
    this.url = urlObj.pathname == "" ? true : false
    
  }
  title = 'gestmailsec';
}
