import { User } from './../../interfaces/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, RouterLink, RouterLinkActive, TitleStrategy } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ServicesService } from '../../services/services.service';
import { api as apiConfig } from '../../constant';

@Component({
  selector: 'app-compose',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, SidebarComponent, HeaderComponent, FooterComponent, ReactiveFormsModule, FormsModule
    ,
  ],
  templateUrl: './compose.component.html',
  styleUrl: './compose.component.css'
})
export class ComposeComponent implements OnInit {

  users!: any[]
  form!: FormGroup
  ngOnInit(): void {
    this.onForm()
    this.allUsers()
  }
  constructor(private serviceService: ServicesService) { }

  onForm() {
    this.form = new FormGroup({
      toMail: new FormControl('', [Validators.required]),
      from: new FormControl('', [Validators.required]),
      object: new FormControl(''),
      status: new FormControl('', [Validators.required]),
      content: new FormControl('', [Validators.required]),

    })
  }


  allUsers() {
    const url = `${apiConfig.admin.user.getAll}`;
    this.serviceService.getResources(url).subscribe({
      next: res => {
        this.users = res.body;


      },
    });
  }
  submit() {
    const userMail = "admin@gmail.com";
    const status = 'envoyer'
    const message = {
      emailExpediteur: userMail,
      objet: this.form.value.object,
      content: this.form.value.content,
      statut: status,
      date : new Date(),
      urlsJointPiecesstring: [''],

      utilisateur: this.findUserIdById(this.form.value.toMail)
    }

   // console.log(message);

    const url = `${apiConfig.message.create}`;
    this.serviceService.saveResource(url + 1, message).subscribe({
      next: res => {
        alert("Message envoyé avec succès")
      },
      error: err => {
        console.log(err);

      }
    });

  }

  findUserIdById(id: number) {
    return this.users.find(item => id === item.id)!

  }
}


