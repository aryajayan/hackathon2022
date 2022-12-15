import { Component, OnInit } from '@angular/core';
import { FeedService } from '../feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  constructor(private feedService: FeedService) {}
  
  ngOnInit(): void {
    // this.feedService.getStatus().subscribe((status) => {
    //   console.log(status);
    // })

    this.makeHttp2Calls();
    this.makeHttp1Calls();

  }


  makeHttp2Calls() {
    const urls = [ 
      'https://java-httpnew.azurewebsites.net/api/status',
      'https://java-httpnew.azurewebsites.net/api/get?wc=1000000',
      // 'https://java-httpnew.azurewebsites.net/api/status',
      // 'https://java-httpnew.azurewebsites.net/api/status',
      // 'https://java-httpnew.azurewebsites.net/api/status',
      // 'https://java-httpnew.azurewebsites.net/api/status'
    ]

    const requests = urls.map((url) => fetch(url, {mode: 'no-cors'}));
    // fetch('https://java-httpnew.azurewebsites.net/api/status', {mode: 'no-cors'}).then((response) => {
    //   console.log(response);
    // })
    Promise.all(requests)
    .then((responses) => {
      responses.map((response) => response.json()).map((res) => console.log(res));
    })
  }


  makeHttp1Calls() {
    const urls = [ 
      'https://java-httpold.azurewebsites.net/api/status',
      'https://java-httpold.azurewebsites.net/api/get?wc=1000000',
      // 'https://java-httpold.azurewebsites.net/api/status',
      // 'https://java-httpold.azurewebsites.net/api/status',
      // 'https://java-httpold.azurewebsites.net/api/status',
      // 'https://java-httpold.azurewebsites.net/api/status'
    ]

    const requests = urls.map((url) => fetch(url, {mode: 'no-cors'}));
    // fetch('https://java-httpold.azurewebsites.net/api/status', {mode: 'no-cors'}).then((response) => {
    //   console.log(response);
    // })
    Promise.all(requests)
    .then((responses) => {
      responses.map((response) => response.json()).map((res) => console.log(res));
    })
  }



}
