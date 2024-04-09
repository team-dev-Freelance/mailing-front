import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ServicesService } from '../../services/services.service';
import { api as apiConfig } from '../../constant';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule,RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent  implements OnInit{
  isReadActive: boolean = false;
  isImportantActive: boolean = false;
  isSendActive: boolean = false;
  isDraftActive: boolean = false;
  messages!:any
  messagesLength!:any
  role!:any


  constructor(private router: Router,private serviceService: ServicesService) {}
  ngOnInit(): void {
    this.role = sessionStorage.getItem('role')
    this.unreadMail()
  }

  unreadMail() {
    const url = `${apiConfig.message.getBoite}`;
    this.serviceService.getResources(url + sessionStorage.getItem('userId') ).subscribe({
      next: res => {
        this.messages = res.body;


      },
    });
  }
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