import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-others-message',
  standalone: true,
  imports: [],
  templateUrl: './others-message.component.html',
  styleUrl: './others-message.component.css'
})
export class OthersMessageComponent  implements OnInit{
  constructor(private route: ActivatedRoute){}
  ngOnInit(): void {
    const slug = this.route.snapshot.params['slug']
    
  }

}
