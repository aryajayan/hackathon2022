import { Component, OnInit } from '@angular/core';
import { FeedService } from '../feed.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  feedReports;

  constructor(private feedService: FeedService, private meta: Meta) {}

  ngOnInit(): void {
    this.meta.updateTag({ property: 'og:title', content: 'YOUR_TITLE' });
    this.meta.updateTag({
      property: 'og:image',
      content:
        'https://ichef.bbci.co.uk/news/976/cpsprodpb/C764/production/_128044015_chinacovid.jpg',
    });
    this.meta.updateTag({
      property: 'og:url',
      content:
        'https://victorious-river-02e938710.2.azurestaticapps.net/#/feed',
    });
    this.feedReports = [
      {
        hl: 'Research Report 1',
        ab: 'This is a test article, used for research hackathon poc',
        pd: '1671375724943',
        a: { n: 'Author 1' },
      },
      {
        hl: 'Research Report 2',
        ab: 'This is a test article, used for research hackathon poc',
        pd: '1671375734943',
        a: { n: 'Author 2' },
      },
      {
        hl: 'Research Report 3',
        ab: 'This is a test article, used for research hackathon poc',
        pd: '1671375744943',
        a: { n: 'Author 3' },
      },
      {
        hl: 'Research Report 4',
        ab: 'This is a test article, used for research hackathon poc',
        pd: '1671375754943',
        a: { n: 'Author 4' },
      },
      {
        hl: 'Research Report 5',
        ab: 'This is a test article, used for research hackathon poc',
        pd: '1671375764943',
        a: { n: 'Author 5' },
      },
      {
        hl: 'Research Report 6',
        ab: 'This is a test article, used for research hackathon poc',
        pd: '1671375774943',
        a: { n: 'Author 6' },
      },
      {
        hl: 'Research Report 7',
        ab: 'This is a test article, used for research hackathon poc',
        pd: '1671375784943',
        a: { n: 'Author 7' },
      },
      {
        hl: 'Research Report 8',
        ab: 'This is a test article, used for research hackathon poc',
        pd: '1671375794943',
        a: { n: 'Author 8' },
      },
      {
        hl: 'Research Report 9',
        ab: 'This is a test article, used for research hackathon poc',
        pd: '1671375724943',
        a: { n: 'Author 9' },
      },
      {
        hl: 'Research Report 10',
        ab: 'This is a test article, used for research hackathon poc',
        pd: '1671375724943',
        a: { n: 'Author 10' },
      },
    ];

    fetch('https://java-httpnew.azurewebsites.net/api/status', {
      mode: 'no-cors',
    }).then((response) => {
      this.makeHttp2Calls();
      console.log(response.json());
    });

    // fetch('https://java-httpold.azurewebsites.net/api/status', { mode: 'no-cors' }).then((response) => {
    //   this.makeHttp1Calls();
    //   console.log(response.json());
    // })
  }

  makeHttp2Calls() {
    const urls = [
      // 'https://java-httpnew.azurewebsites.net/api/status',
      'https://java-httpnew.azurewebsites.net/api/companies',
      'https://java-httpnew.azurewebsites.net/api/feedReports',
      'https://java-httpnew.azurewebsites.net/api/getanalysts',
      'https://java-httpnew.azurewebsites.net/api/getcollections',
      'https://java-httpnew.azurewebsites.net/api/getperiodicals',
    ];

    const requests = urls.map((url) => fetch(url, { mode: 'no-cors' }));
    Promise.all(requests).then((responses) => {
      responses
        .map((response) => response.json())
        .map((res) => console.log(res));
    });
  }

  // makeHttp1Calls() {
  //   const urls = [
  //     // 'https://java-httpold.azurewebsites.net/api/status',
  //     'https://java-httpold.azurewebsites.net/api/companies',
  //     'https://java-httpold.azurewebsites.net/api/feedReports',
  //     'https://java-httpold.azurewebsites.net/api/getanalysts',
  //     'https://java-httpold.azurewebsites.net/api/getcollections',
  //     'https://java-httpold.azurewebsites.net/api/getperiodicals'
  //   ]

  //   const requests = urls.map((url) => fetch(url, { mode: 'no-cors' }));

  //   Promise.all(requests)
  //     .then((responses) => {
  //       responses.map((response) => response.json()).map((res) => console.log(res));
  //     })
  // }
}
