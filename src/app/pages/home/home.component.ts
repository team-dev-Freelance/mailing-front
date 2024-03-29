import { CommonModule } from '@angular/common';
import { HeaderComponent } from './../../components/header/header.component';
import { SidebarComponent } from './../../components/sidebar/sidebar.component';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Message } from '../../interfaces/message';
import { FooterComponent } from '../../components/footer/footer.component';

import { ServicesService } from '../../services/services.service';
import { api as apiConfig } from '../../constant';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterLink, RouterLinkActive, SidebarComponent, HeaderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  messages!: any

  constructor(private serviceService: ServicesService,private router: Router) {

  }
  ngOnInit(): void {
    this.unreadMail()
  }
  unreadMail() {
    const userId = 1;
    const url = `${apiConfig.message.getBoite}`;
    this.serviceService.getResources(url + userId ).subscribe({
      next: res => {
        this.messages = res.body;
        console.log(res.body);


      },
    });
  }

  read(arg: any) {
    this.router.navigate(['read',arg]); 
  }



}
