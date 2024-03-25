import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, RouterLink, RouterLinkActive } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-others-message',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,SidebarComponent,HeaderComponent,FooterComponent],
  templateUrl: './others-message.component.html',
  styleUrl: './others-message.component.css'
})
export class OthersMessageComponent implements OnInit {
  public slug: string = ''
  constructor(private route: ActivatedRoute) { 

   
  }
  ngOnInit(): void {
   
    this.route.params.subscribe((params: Params) => {
      switch (params['slug']) {
        case 'read':
          this.slug = " lu(s)";
          break;
        case 'draft':
          this.slug = "Brouillon(s)";
          break;
        case 'send':
          this.slug = " Envoyé(s)";
          break;
        case 'important':
          this.slug = " Important(s)";
          break;
        default:
          this.slug = "";
          break;
      }
    });
  }

  

}
