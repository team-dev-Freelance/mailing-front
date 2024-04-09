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
  imports: [CommonModule,RouterLink, RouterLinkActive, SidebarComponent, HeaderComponent, FooterComponent,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
important(arg0: any) {
  const userId = sessionStorage.getItem('userId');
  const url = `${apiConfig.message.update}`;
  this.serviceService.getResources(url+ userId +"/statut?statut=important").subscribe({
    next: res => {
      alert("Message marqué comme important")

    },
  });
}


  messages!: any

  constructor(private serviceService: ServicesService,private router: Router) {

    
    

  }
  ngOnInit(): void {
    this.unreadMail()

    const url = `${apiConfig.admin.user.getOneId}`;
    this.serviceService.getResource(url, sessionStorage.getItem('userId')).subscribe({
      next: res => {
        localStorage.setItem('nom',res.body.nom)
        localStorage.setItem('email',res.body.email)

    
    


      },
    });

  }
  unreadMail() {
    const userId = sessionStorage.getItem('userId');
    const url = `${apiConfig.message.getBoite}`;
    this.serviceService.getResources(url + userId ).subscribe({
      next: res => {
        this.messages = res.body;

      },
    });
  }

  read(arg: any) {
    this.router.navigate(['read',arg]); 
  }
  remove(arg: any) {
    const url = `${apiConfig.message.deleteMail}`;


    this.serviceService.deleteResource(url , arg ).subscribe({
      next: res => {
        alert("Suppression faites")
        window.location.reload()
      },
      error :err  =>{
        console.log("Erreur de suppression");
        alert("Suppression faites")

        window.location.reload()
        
      }
    });
    }



}
