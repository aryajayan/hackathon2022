import { Component } from '@angular/core';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})
export class ThemesComponent {

  themesList;


  ngOnInit(): void {


    this.themesList = [
      {
        'hl': 'Theme 1',
        'ab': 'This is a test theme, used for research hackathon poc',
        'pd': '1671375724943',
        'a': { 'n': 'Author 1' }
      },
      {
        'hl': 'Theme 2',
        'ab': 'This is a test theme, used for research hackathon poc',
        'pd': '1671375724943',
        'a': { 'n': 'Author 2' }
      },
      {
        'hl': 'Theme 3',
        'ab': 'This is a test theme, used for research hackathon poc',
        'pd': '1671375724943',
        'a': { 'n': 'Author 3' }
      },
      {
        'hl': 'Theme 4',
        'ab': 'This is a test theme, used for research hackathon poc',
        'pd': '1671375724943',
        'a': { 'n': 'Author 4' }
      },
      {
        'hl': 'Theme 5',
        'ab': 'This is a test theme, used for research hackathon poc',
        'pd': '1671375724943',
        'a': { 'n': 'Author 5' }
      },
      {
        'hl': 'Theme 6',
        'ab': 'This is a test theme, used for research hackathon poc',
        'pd': '1671375724943',
        'a': { 'n': 'Author 6' }
      },
      {
        'hl': 'Theme 7',
        'ab': 'This is a test theme, used for research hackathon poc',
        'pd': '1671375724943',
        'a': { 'n': 'Author 7' }
      },
      {
        'hl': 'Theme 8',
        'ab': 'This is a test theme, used for research hackathon poc',
        'pd': '1671375724943',
        'a': { 'n': 'Author 8' }
      },
      {
        'hl': 'Theme 9',
        'ab': 'This is a test theme, used for research hackathon poc',
        'pd': '1671375724943',
        'a': { 'n': 'Author 9' }
      },
      {
        'hl': 'Theme 10',
        'ab': 'This is a test theme, used for research hackathon poc',
        'pd': '1671375724943',
        'a': { 'n': 'Author 10' }
      }
    ]
    

    fetch('https://java-httpold.azurewebsites.net/api/status', { mode: 'no-cors' }).then((response) => {
      this.makeHttp1Calls();
      console.log(response.json());
    })

  }

  makeHttp1Calls() {
    const urls = [
      'https://java-httpold.azurewebsites.net/api/companies',
      'https://java-httpold.azurewebsites.net/api/feedReports',
      'https://java-httpold.azurewebsites.net/api/getanalysts',
      'https://java-httpold.azurewebsites.net/api/getcollections',
      'https://java-httpold.azurewebsites.net/api/getperiodicals'
    ]

    const requests = urls.map((url) => fetch(url, { mode: 'no-cors' }));

    Promise.all(requests)
      .then((responses) => {
        responses.map((response) => response.json()).map((res) => console.log(res));
      })
  }

}
