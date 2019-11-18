import {Component, Input, OnInit} from "@angular/core";
import {PharmacieModel} from "../../models/pharmacie.model";
import {PharmacieService} from "../../services/pharmacie.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'show-pharmacie',
    templateUrl: './showPharmacie.page.html',
    styleUrls: ['./showPharmacie.page.scss'],
})
export class ShowPharmaciePage implements OnInit {

    @Input()
    pharmacie: PharmacieModel;
    idPharmacie: number;

    
    public origin: any;
    public destination: any;

    constructor(private pharmacieService: PharmacieService, private activeRoute: ActivatedRoute) {

        this.pharmacie = new PharmacieModel();


        this.idPharmacie = parseInt(this.activeRoute.snapshot.paramMap.get('id'));


    }

    ngOnInit() {
        console.log(this.idPharmacie);
        this.pharmacieService.getPharmacieById(this.idPharmacie).subscribe(res =>{
                this.pharmacie = res;
                this.destination = {
                    lat:this.pharmacie.latitude,
                    lng:this.pharmacie.longitude,
                }
                console.log(this.pharmacie.latitude)
        }
            );

        this.getUserLocation();
      //  this.getDirection()

    }


    private getUserLocation() {
        /// locate the user
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
             this.origin = { lat : position.coords.latitude, lng:position.coords.longitude}

            });
        }
    }
    // public getDirection() {
    //
    //     this.destination={lat: this.pharmacie.latitude, lng: this.pharmacie.longitude};
    //     console.log(this.pharmacie.latitude)
    //     console.log(this.pharmacie.longitude)
    // }

}