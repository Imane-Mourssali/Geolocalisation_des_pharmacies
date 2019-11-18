import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import {AgmCoreModule} from '@agm/core';
import {HttpClientModule} from "@angular/common/http";
import {PharmacieService} from "../../services/pharmacie.service";
import {ShowPharmaciePage} from "../showPharmacie/showPharmacie.page";
import {AgmDirectionModule} from "agm-direction";

const routes: Routes = [
    {
        path: '',
        component: ShowPharmaciePage,

    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,HttpClientModule,
        RouterModule.forChild(routes),
        AgmCoreModule.forRoot({
            apiKey:
            ''
        }),
        AgmDirectionModule
    ],
    declarations: [ShowPharmaciePage],
    providers: [PharmacieService],
})
export class ShowPharmaciePageModule {}
