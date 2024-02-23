
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from 'src/app/service/hardcoded-authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit{

  username = 'manager'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  
  //Router
  //Angular-giveMeRouter
  //Depency Injection
  constructor(private router: Router,  
    private hardcodedAuthenticationService: HardcodedAuthenticationService) { } 

  ngOnInit() {
      
  }

  handleLogin() {
    //console.log(this.username);
    //if(this.username==="manager" && this.password==='dummy') {
      if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      //Redirect to Welcome Page
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }
}
