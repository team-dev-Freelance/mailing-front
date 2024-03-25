import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isReadActive: boolean = false;
  isImportantActive: boolean = false;
  isSendActive: boolean = false;
  isDraftActive: boolean = false;

  constructor(private router: Router) {}

  read() {
    this.isReadActive = true;
    this.isImportantActive = false;
    this.isSendActive = false;
    this.isDraftActive = false;
    this.router.navigate(['mail','read']); 
  }

  important() {
    this.isReadActive = false;
    this.isImportantActive = true;
    this.isSendActive = false;
    this.isDraftActive = false;
    this.router.navigate(['mail','important']); 
  }

  send() {
    this.isReadActive = false;
    this.isImportantActive = false;
    this.isSendActive = true;
    this.isDraftActive = false;
    this.router.navigate(['mail','send']); 
  }

  draft() {
    this.isReadActive = false;
    this.isImportantActive = false;
    this.isSendActive = false;
    this.isDraftActive = true;
    this.router.navigate(['mail','draft']); 
  }

  isRouteActive(route: string): boolean {
    return this.router.isActive(route, true);
  }
}