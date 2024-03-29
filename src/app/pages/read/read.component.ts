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
  imports: [CommonModule,RouterLink, RouterLinkActive, SidebarComponent, HeaderComponent, FooterComponent],
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
    //this.message = this.findMessageById(id)
    //this.read(id)
    //console.log(this.messages);


  }

  unreadMail() {
    const userId = 1;
    const url = `${apiConfig.message.getBoite}`;
    this.serviceService.getResources(url + userId).subscribe({
      next: res => {
        this.messages = res.body;
        this.message = this.messages.find((item: { id: number; }) => this.id == item.id)
        console.log(this.messages);
      },
    });
  }


}
