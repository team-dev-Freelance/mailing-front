import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-form-account',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule,FormsModule,SidebarComponent,HeaderComponent,FooterComponent,],
  templateUrl: './form-account.component.html',
  styleUrl: './form-account.component.css'
})
export class FormAccountComponent  implements OnInit{

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
    throw new Error('Method not implemented.');
    }

}
