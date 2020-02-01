import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Routes, RouterModule, Router} from '@angular/router';
import { IonicModule } from '@ionic/angular';
import {HttpClientModule} from "@angular/common/http";
import {CameraPage} from "./camera.page";

const routes: Routes = [
    {
        path: '',
        component: CameraPage,
    }
]

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,HttpClientModule,
        RouterModule.forChild(routes),

    ],
    declarations: [CameraPage],

})
export class CameraPageModule {



}

