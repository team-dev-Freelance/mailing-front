import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

import { ServicesService } from '../../services/services.service';
import {   api as apiConfig} from '../../constant';
@Component({
  selector: 'app-others-message',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive,SidebarComponent,HeaderComponent,FooterComponent,
    ],
  templateUrl: './others-message.component.html',
  styleUrl: './others-message.component.css'
})
export class OthersMessageComponent implements OnInit {
  public slug: string = ''
  messages!: any

  constructor(private route: ActivatedRoute,private serviceService: ServicesService,private router: Router) { 

   
  }
  ngOnInit(): void {
   
    this.route.params.subscribe((params: Params) => {
      switch (params['slug']) {
        case 'read':
          
          this.slug = " lu(s)";
          this.mail("lu")
          break;
        case 'draft':
          this.slug = "Brouillon(s)";
          this.mail("brouillon")
          break;
        case 'send':
          this.slug = " Envoyé(s)";
          this.mail("envoyer")
          break;
        case 'important':
          this.slug = " Important(s)";
          this.mail("important")
          break;
        default:
          this.slug = "";
          break;
      }
    });
  }
  mail(status:string) {
    this.messages=[]
    const userId = 1;
    const url = `${apiConfig.message.getAllStatus}`;
    this.serviceService.getResources(url + userId + '/statut?statut='+status).subscribe({
      next: res => {
        this.messages = res.body;
        console.log(res.body);


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
