import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-transfer',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, SidebarComponent, HeaderComponent, FooterComponent, ReactiveFormsModule, FormsModule
    ,],
  templateUrl: './transfer.component.html',
  styleUrl: './transfer.component.css'
})
export class TransferComponent {

  message: any
  messages!: any
  id!: number
  constructor(private route: ActivatedRoute, private serviceService: ServicesService, private router: Router) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

  }
  

}
