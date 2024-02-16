import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{

  welcome = 'Welcome to my first Project'
  name = ''

  constructor (private route:ActivatedRoute) {}

  ngOnInit(){

    console.log(this.welcome)
    //console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name']
  

  }

}