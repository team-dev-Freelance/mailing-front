import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule,FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent  implements OnInit{
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
