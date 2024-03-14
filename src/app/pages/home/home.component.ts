import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Message } from '../../interfaces/message';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements OnInit{
  messages!:Message[]

  constructor(private service : MessageService){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
/*getMessages(){
  this.service.unread.su
}*/



}
