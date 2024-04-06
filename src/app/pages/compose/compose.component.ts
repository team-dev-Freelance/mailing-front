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
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  userMail = localStorage.getItem('email')

  formData!: FormData;
  ngOnInit(): void {
    this.onForm()
    this.allUsers()
    // this.toastr.success('Hello world!', 'Success');

  }
  constructor(private serviceService: ServicesService,   private http: HttpClient,) { }

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

  onFileSelected(event: any) {
    const file: File = event.target.files[0];


    this.formData.append('file', file);

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

    const userId = localStorage.getItem('id');
    var status = "envoyer"

    this.formData.append('objet', this.form.value.object);
    this.formData.append('content', this.form.value.content);
    const email = localStorage.getItem('nom');
    if (email !== null) {
      this.formData.append('emailExpediteur', email);
    }
    this.formData.append('userId', this.form.value.toMail);
    this.formData.forEach((value, key) => {
      console.log(key + ': ' + value);
    });
    const host = `${apiConfig.baseUrl}`;
    const url = `${apiConfig.message.create}`
    const httpOptions = {
      headers: new HttpHeaders({
        //'Content-Type': 'multipart/form-data',
        // 'Content-Type': 'application/json', // Si vous envoyez des données JSON
        // 'Authorization': 'Bearer ' + authToken, // Si vous avez besoin d'une authentification
      }),
      observe: 'response' as const,
      responseType: 'json' as const,
    };
    this.http.post(host+url, this.formData)
       .subscribe(
         (response) => {
           console.log('Fichier téléchargé avec succès', response);
           alert("Message envoyé avec succès")
 
        this.form.reset
         },
         (error) => {
           console.error('Erreur lors du téléchargement du fichier', error);
           
        alert("Error")
         }
       );
   
    /* const url = `${apiConfig.message.create}`;
    this.serviceService.saveResource(url + userId, this.formData).subscribe({
      next: res => {
        
          alert("Message envoyé avec succès")
 
        this.form.reset
 
      },
      error: err => {
        console.log(err);
        alert("Error")
 
      }
    }); */



  }

  findUserIdById(id: number) {
    return this.users.find(item => id === item.id)!

  }



  draft(arg: any) {

  }
}


