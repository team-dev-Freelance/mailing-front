import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { api as apiConfig } from '../../constant';

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
      email: new FormControl(null,
      Validators.compose([
        Validators.required,
        Validators.pattern(
          /^(\d{9}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/
        ),
      ]),),
      username : new FormControl('',[Validators.required]),
      password : new FormControl('',[Validators.required])
    })
  }

  submit() {
         const auth = {
          username : this.form.value.username,
          email : this.form.value.email,
          password : this.form.value.password,
          role : 'USER'
         }
console.log(auth);

const url = `${apiConfig.auth.register}`;

      this.authService.register(url,auth).subscribe({
        next:res =>{
          this.router.navigate(['/'])
        },
        error:err =>{
          alert("Veuillez entrer vos informations")
        }
      })        
    }
}
