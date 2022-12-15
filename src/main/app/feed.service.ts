import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private http: HttpClient) { }


  getStatus() {
    // return this.http.get('https://java-httpnew.azurewebsites.net/api/status', { headers: }).pipe(
    //   map((response) => console.log('Status:', response ))
    // )

    // return fetch('https://java-httpnew.azurewebsites.net/api/status', {mode: 'no-cors'}).then((response) => {
    //   console.log(response);
    // })
  }
}
