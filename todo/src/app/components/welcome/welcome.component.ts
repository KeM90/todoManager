import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { HelloWorldBean, WelcomeDataService } from 'src/app/service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{

  welcome = 'Welcome to my first Project'
  welcomeMessageFromService:string | undefined
  name = ''

  constructor (
    private route:ActivatedRoute,
    private service:WelcomeDataService) {}

  ngOnInit(){

    console.log(this.welcome)
    //console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name']
  

  }

  getWelcomeMessage() {
    // console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );

    // console.log('last line of getWelcomeMessage')
    //console.log("get Welcome Message");
  }

  getWelcomeMessageWithParameter() {
    // console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );

    // console.log('last line of getWelcomeMessage')
    //console.log("get Welcome Message");
  }

  handleSuccessfulResponse(response: any) {
    this.welcomeMessageFromService = response.message
    // console.log(response);
    // console.log(response.message);
  }

  handleErrorResponse(error: any) {
    // console.log(error);
    // console.log(error.error);
    // console.log(error.error.message);
    this.welcomeMessageFromService = error.error.message
  }

}