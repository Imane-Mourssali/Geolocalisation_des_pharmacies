import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from "../service/authentification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authenticationService:AuthentificationService,private router:Router) { }

  ngOnInit() {
  }
onLogin(user){
    let res =this.authenticationService.login(user.username,user.password);
    if(res==true){
      this.router.navigateByUrl('/menu/home');
    }
    else this.router.navigateByUrl('login');
  }
}
