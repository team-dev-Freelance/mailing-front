import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, Params } from '@angular/router';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

import { ServicesService } from '../../services/services.service';
import { api as apiConfig } from '../../constant';

@Component({
  selector: 'app-form-account',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule,FormsModule,SidebarComponent,HeaderComponent,FooterComponent,],
  templateUrl: './form-account.component.html',
  styleUrl: './form-account.component.css'
})
export class FormAccountComponent  implements OnInit{


  constructor(private serviceService: ServicesService) { }

  form!:FormGroup
  ngOnInit(): void {
    this.onForm()
  }

  onForm(){

    this.form = new FormGroup({
      username: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required]),
      confirmation: new FormControl('',[Validators.required]),
      role: new FormControl('',[Validators.required]),
    })
  }

  submit() {

     const user = {
      username: this.form.value.username,
      email: this.form.value.email,
      password: this.form.value.password,
      role: this.form.value.role

    } 

    

     const url = `${apiConfig.auth.register}`;
     this.serviceService.saveResource(url , user).subscribe({
       next: res => {
         alert("Utilisateur cree avec success")
 
         this.form.reset
 
       },
       error: err => {
         console.log(err);
 
       }
     });



  }


}
