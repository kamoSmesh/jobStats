import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SalariesServiceService {
  URL = 'https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=9335f511&app_key=de533c35f380f315e5ef3b329705148d';
  getSearch: any;


  constructor(private http: HttpClient) { }

  getSalaries(): Observable<any> {
    return this.http.get(this.URL);

  }
}

