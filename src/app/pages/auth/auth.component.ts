import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router){}

  form!:FormGroup
  ngOnInit(): void {
    this.onForm()
  }
  onForm(){
    this.form = new FormGroup({
      username : new FormControl('',[Validators.required]),
      password : new FormControl('',[Validators.required])
    })
  }

  submit() {
         const auth = {
          email : this.form.value.username,
          password : this.form.value.password,
         }

      this.authService.login(auth).subscribe({
        next:res =>{
          this.router.navigate(['/inbox'])
        },
        error:err =>{
          alert("Veuillez entrer vos informations")
        }
      })        
    }

}
