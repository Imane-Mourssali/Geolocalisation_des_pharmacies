import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from '@angular/common/http';
import {PharmacieModel} from '../models/pharmacie.model';
import {Observable} from "rxjs/index";



@Injectable()
export class PharmacieService {

  public currentPharmacie;
  public host:string="http://localhost:8080";

  constructor(private http: HttpClient) { }

  public getResource(url){
    return this.http.get(url);
  }


  public getPharmacieList(): Observable<PharmacieModel[]> {
    return this.http.get<PharmacieModel[]>('http://localhost:8080/pharmacie' );

  }
  public addPharmacie(pharmacie: PharmacieModel) {
    const body = JSON.stringify(pharmacie);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };

    return this.http.post('http://localhost:8080/pharmacie', body, httpOptions);

  }

  public deletePharmacie(id: number): Observable<any> {
   const headers = new Headers();
    headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');

    return this.http.delete<any>( 'http://localhost:8080/pharmacie' + '/' + id);
  }
  public updatePharmacie(pharmacie: PharmacieModel, id: number) {
    const body = JSON.stringify(pharmacie);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    return this.http.put('http://localhost:8080/pharmacie' + '/' + id, body, httpOptions);
  }

  public getPharmacieById(id: number) : Observable<any>{
    const headers = new Headers();
    headers.append('Access-Control-Allow-Origin', 'http://localhost:8080');
    return this.http.get( 'http://localhost:8080/pharmacie' + '/' + id);
  }
  public getPharmacieByName(nom:string) {
      const body = JSON.stringify(nom);
      const httpOptions = {
          headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': 'my-auth-token'
          })
      };
      return this.http.post('http://localhost:8080/chercherParmacie', body, httpOptions);

  }

  uploadPhotoProduct(file: File): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();
    formdata.append('file', file);
    // formdata.append('Content-Type','application/json');
    // formdata.append( 'Authorization', 'my-auth-token');
    // formdata.append('Access-Control-Allow-Origin', '*');
    // formdata.append('Access-Control-Allow-Headers','Content-Type');
    // formdata.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    const req = new HttpRequest('POST', this.host+'/uploadPhoto/', formdata, {
      //Headers:  headers ,
      reportProgress: true,
      responseType: 'text',

    });

     return this.http.request(req);
  }
}
