import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, RouterLink, RouterLinkActive } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-compose',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,SidebarComponent,HeaderComponent, FooterComponent,ReactiveFormsModule,FormsModule],
  templateUrl: './compose.component.html',
  styleUrl: './compose.component.css'
})
export class ComposeComponent implements OnInit{
  form! : FormGroup
  ngOnInit(): void {
    this.onForm()
  }

  onForm(){
    this.form = new FormGroup({
      to:new FormControl([],[Validators.required]),
      from:new FormControl('',[Validators.required]),
      object:new FormControl(''),
      status:new FormControl('',[Validators.required]),
      content:new FormControl('',[Validators.required]),
      
    })
  }
  submit(){
      console.log(this.form.value)
  }

}
