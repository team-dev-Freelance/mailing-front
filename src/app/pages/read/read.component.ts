import { CommonModule } from '@angular/common';
import { HeaderComponent } from './../../components/header/header.component';
import { SidebarComponent } from './../../components/sidebar/sidebar.component';
import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';
import { api as apiConfig } from '../../constant';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-read',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, SidebarComponent, HeaderComponent, FooterComponent],
  templateUrl: './read.component.html',
  styleUrl: './read.component.css'
})
export class ReadComponent implements OnInit {

  message: any
  messages!: any
  id!: number

  constructor(private route: ActivatedRoute, private serviceService: ServicesService, private router: Router) { }
  ngOnInit(): void {
    this.unreadMail()
    this.id = this.route.snapshot.params['id'];

  }

  unreadMail() {
    const messageId = this.id;
    const userID = sessionStorage.getItem('userId');
    const url = `${apiConfig.message.getBoite}`;
    this.serviceService.getResources(url + userID).subscribe({
      next: res => {
        this.messages = res.body;
        this.message = this.messages.find((item: { id: number; }) => this.id == item.id)
      },
    });
  }
  answer() {
    //this.router.navigate(['answer',arg]); 
    console.log();
    
    //this.router.navigate(['compose',this.message.id]); 

  }
  transfer() {
    //this.router.navigate(['transfer',this.message.id]); 

  }

  


}
