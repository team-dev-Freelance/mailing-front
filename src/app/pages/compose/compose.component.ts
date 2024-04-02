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

  selectedFile?: File;
  users!: any[]
  form!: FormGroup
  id: any;
  ngOnInit(): void {
    this.onForm()
    this.allUsers()
   // this.toastr.success('Hello world!', 'Success');
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
  
  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    console.log();
    
    const formData = new FormData();
    //formData.append('file', file);

   /* this.http.post('URL_du_point_de_fin', formData)
      .subscribe(
        (response) => {
          console.log('Fichier téléchargé avec succès', response);
        },
        (error) => {
          console.error('Erreur lors du téléchargement du fichier', error);
        }
      );*/
  }


  allUsers() {
    const url = `${apiConfig.admin.user.getAll}`;
    this.serviceService.getResources(url).subscribe({
      next: res => {
        this.users = res.body;


      },
    });
  }
  submit(arg: any) {
    const userMail = localStorage.getItem('email');
    const userId = localStorage.getItem('id');
    var status = ""
    if (arg == 0)
      status = 'envoyer'
    else
      status = 'brouillon'
    const message = {
      emailExpediteur: userMail,
      objet: this.form.value.object,
      content: this.form.value.content,
      statut: status,
      date: new Date(),
      urlsJointPiecesstring: [''],

      utilisateur: this.findUserIdById(this.form.value.toMail)
    }

    // console.log(message);

    const url = `${apiConfig.message.create}`;
    this.serviceService.saveResource(url + userId, message).subscribe({
      next: res => {
        if (arg == 0)
          alert("Message envoyé avec succès")
        else
          alert("Message Brouillon")

        this.form.reset

      },
      error: err => {
        console.log(err);

      }
    });

  }

  findUserIdById(id: number) {
    return this.users.find(item => id === item.id)!

  }



  draft(arg: any) {
    alert(arg)
    this.submit(1)

  }
}


