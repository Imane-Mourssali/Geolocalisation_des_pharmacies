import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LoginPage } from './login.page';
import {MatInputModule, MatSnackBarModule} from "@angular/material";
import {HttpClientModule} from "@angular/common/http";


const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatInputModule,
    HttpClientModule,
    MatSnackBarModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginPage],
    providers:[]
})
export class LoginPageModule {}
