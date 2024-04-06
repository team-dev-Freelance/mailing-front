import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { ServicesService } from '../../services/services.service';
import { api as apiConfig } from '../../constant';

@Component({
  selector: 'app-answer',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, SidebarComponent, HeaderComponent, FooterComponent, ReactiveFormsModule, FormsModule
  ],
  templateUrl: './answer.component.html',
  styleUrl: './answer.component.css'
})
export class AnswerComponent {
  submit() {
    throw new Error('Method not implemented.');
  }
  selectedFile?: File;
  users!: any[]
  form!: FormGroup
  message: any
  messages!: any
  id!: number
  formData!: FormData;

  constructor(private route: ActivatedRoute, private serviceService: ServicesService, private router: Router) { }
  ngOnInit(): void {
    this.unreadMail()
    this.id = this.route.snapshot.params['id'];
    this.allUsers()

  }
  allUsers() {
    const url = `${apiConfig.admin.user.getAll}`;
    this.serviceService.getResources(url).subscribe({
      next: res => {
        this.users = res.body;


      },
    });
  }

  onForm() {
    this.form = new FormGroup({
      toMail: new FormControl('', [Validators.required]),
      from: new FormControl('', [Validators.required]),
      object: new FormControl(''),
      status: new FormControl('', [Validators.required]),
      content: new FormControl('', [Validators.required]),

    })
    this.formData = new FormData()
  }
  unreadMail() {
    const messageId = this.id;
    const userID = localStorage.getItem('id');
    const url = `${apiConfig.message.getBoite}`;
    this.serviceService.getResources(url + userID).subscribe({
      next: res => {
        this.messages = res.body;
        this.message = this.messages.find((item: { id: number; }) => this.id == item.id)
        console.log(this.message);
      },
    });
  }



}
