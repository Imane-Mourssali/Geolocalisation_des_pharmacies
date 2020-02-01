import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserModel} from "../models/user.model";
import {MatSnackBar} from "@angular/material";
import {AuthLoginInfo} from "../../auth/login-info";
import {TokenStorageService} from "../../auth/token-storage.service";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    form: any = {};
    isLoggedIn = false;
    isLoginFailed = false;
    errorMessage = '';
    roles: string[] = [];
    private loginInfo: AuthLoginInfo;
    private authority: string;

    constructor( private authService: AuthService, private tokenStorage: TokenStorageService) {

    }

    ngOnInit() {
        if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
           // this.roles = this.tokenStorage.getAuthorities();
        }
    }

    onSubmit() {
        console.log(this.form);

        this.loginInfo = new AuthLoginInfo(
            this.form.username,
            this.form.password);

        this.authService.attemptAuth(this.loginInfo).subscribe(
            data => {
                this.tokenStorage.saveToken(data.accessToken);
                this.tokenStorage.saveUsername(data.username);
                this.tokenStorage.saveAuthorities(data.authorities);

                this.isLoginFailed = false;
                this.isLoggedIn = true;
                window.location.href = "/menu/home"
               // this.roles = this.tokenStorage.getAuthorities();
            },
            error => {
                console.log(error);
                this.errorMessage = error.error.message;
                this.isLoginFailed = true;
            }
        );
    }

}