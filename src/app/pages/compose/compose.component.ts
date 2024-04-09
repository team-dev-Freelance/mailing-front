import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ServicesService } from '../../services/services.service';
import { api as apiConfig } from '../../constant';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-compose',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, SidebarComponent, HeaderComponent, FooterComponent, 
    ReactiveFormsModule, FormsModule
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
     


  }
  constructor(private toastr: ToastrService,private serviceService: ServicesService,   private http: HttpClient,private router:Router) { }

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

    const userId = sessionStorage.getItem('id');
    const authToken = sessionStorage.getItem('accessToken');
    var status = "envoyer"

    this.formData.append('objet', this.form.value.object);
    this.formData.append('content', this.form.value.content);
    const email = localStorage.getItem('nom');
    if (email !== null) {
      this.formData.append('emailExpediteur', email);
    }
    this.formData.append('userId', this.form.value.toMail);
    if(this.selectedFile==null)
    {
      this.formData.append('file', '');
    }
    this.formData.forEach((value, key) => {
      console.log(key + ': ' + value);
    });
   
   


    console.log(authToken);
    

       const url = `${apiConfig.message.create}`;
       this.serviceService.saveResourceUpload(url,this.formData).subscribe(
        (response) => {
          console.log('Fichier téléchargé avec succès', response);
          alert("Message envoyé avec succès")

       this.form.reset
        },
        (error) => {
          console.error('Erreur lors du téléchargement du fichier', error);
          
       alert("Error")
        }
      )


   
    



  }

  findUserIdById(id: number) {
    return this.users.find(item => id === item.id)!

  }



  draft() {
    this.toastr.success('Hello world!', 'Success');

  }
}


