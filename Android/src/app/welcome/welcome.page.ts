import { Component, OnInit } from '@angular/core';
import movies from '../../assets/movies.json';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {


  constructor() { }

  public moviesList:{
    id:string;
    name:string;
    description:string;
  }[] = movies;


  ngOnInit() {

  }

}
