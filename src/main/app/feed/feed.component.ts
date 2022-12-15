import { Component, OnInit } from '@angular/core';
import { FeedService } from '../feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  constructor(private feedService: FeedService) { }

  ngOnInit(): void {
    // this.feedService.getStatus().subscribe((status) => {
    //   console.log(status);
    // })

    fetch('https://java-httpnew.azurewebsites.net/api/status', { mode: 'no-cors' }).then((response) => {
      this.makeHttp2Calls();
      console.log(response.json());
    })

    fetch('https://java-httpold.azurewebsites.net/api/status', { mode: 'no-cors' }).then((response) => {
      this.makeHttp1Calls();
      console.log(response.json());
    })


    // this.makeHttp2Calls();
    // this.makeHttp1Calls();

  }


  makeHttp2Calls() {
    const urls = [
      // 'https://java-httpnew.azurewebsites.net/api/status',
      'https://java-httpnew.azurewebsites.net/api/get?wc=1000',
      'https://java-httpnew.azurewebsites.net/api/get?wc=2000',
      'https://java-httpnew.azurewebsites.net/api/get?wc=3000',
      'https://java-httpnew.azurewebsites.net/api/get?wc=4000'
    ]

    const requests = urls.map((url) => fetch(url, { mode: 'no-cors' }));
    Promise.all(requests)
      .then((responses) => {
        responses.map((response) => response.json()).map((res) => console.log(res));
      })
  }


  makeHttp1Calls() {
    const urls = [
      // 'https://java-httpold.azurewebsites.net/api/status',
      'https://java-httpold.azurewebsites.net/api/get?wc=1000',
      'https://java-httpold.azurewebsites.net/api/get?wc=2000',
      'https://java-httpold.azurewebsites.net/api/get?wc=3000',
      'https://java-httpold.azurewebsites.net/api/get?wc=4000'
    ]

    const requests = urls.map((url) => fetch(url, { mode: 'no-cors' }));

    Promise.all(requests)
      .then((responses) => {
        responses.map((response) => response.json()).map((res) => console.log(res));
      })
  }



}
