import { HeaderComponent } from './../../components/header/header.component';
import { SidebarComponent } from './../../components/sidebar/sidebar.component';
import { Component,  } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';
@Component({
  selector: 'app-read',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,SidebarComponent,HeaderComponent,FooterComponent],
  templateUrl: './read.component.html',
  styleUrl: './read.component.css'
})
export class ReadComponent {

}
