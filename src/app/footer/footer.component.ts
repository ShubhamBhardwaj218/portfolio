import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit{
  year: number = 0;

  constructor(private router: Router){}

  ngOnInit(): void {
    
    this.year = new Date().getFullYear();
  }

  navigateTo(link: string) {
    switch(link){
      case 'linkedIn': {
        window.open("https://www.linkedin.com/in/shubham-bhardwaj-75873a195/");

        break;
      }
      case 'gitHub': {
        window.open("https://github.com/ShubhamBhardwaj218");

        break;
      }
      case 'twitter': {
        window.open("");

        break
      }
      case 'facebook': {
        window.open("");

        break;
      }
      case 'instagram': {
        window.open("");

        break;
      }
      default: {
        window.location.reload();

        break;
      }
    }
    
  }

}
