import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent  {
  constructor(private router :Router){}
  draft() {
   this.router.navigate(["mail","draft"]);
  }
  send() {
    this.router.navigate(["mail","send"]);
  }
  unread() {
    this.router.navigate(["mail","unread"]);
  }
  important() {
    this.router.navigate(["mail","important"]);
  }
  

}
