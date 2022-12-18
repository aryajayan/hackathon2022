import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent {

  @Input() reportsList;
  @Input() type;
  constructor() {
    // this.reportsList = [
    //   {
    //     'hl': 'Research Report 1',
    //     'ab': 'This is a test article, used for research hackathon poc',
    //     'pd': '1671375724943',
    //     'a': { 'n': 'Author 1' }
    //   },
    //   {
    //     'hl': 'Research Report 2',
    //     'ab': 'This is a test article, used for research hackathon poc',
    //     'pd': '1671375724943',
    //     'a': { 'n': 'Author 2' }
    //   },
    //   {
    //     'hl': 'Research Report 3',
    //     'ab': 'This is a test article, used for research hackathon poc',
    //     'pd': '1671375724943',
    //     'a': { 'n': 'Author 3' }
    //   },
    //   {
    //     'hl': 'Research Report 4',
    //     'ab': 'This is a test article, used for research hackathon poc',
    //     'pd': '1671375724943',
    //     'a': { 'n': 'Author 4' }
    //   },
    //   {
    //     'hl': 'Research Report 5',
    //     'ab': 'This is a test article, used for research hackathon poc',
    //     'pd': '1671375724943',
    //     'a': { 'n': 'Author 5' }
    //   },
    //   {
    //     'hl': 'Research Report 6',
    //     'ab': 'This is a test article, used for research hackathon poc',
    //     'pd': '1671375724943',
    //     'a': { 'n': 'Author 6' }
    //   },
    //   {
    //     'hl': 'Research Report 7',
    //     'ab': 'This is a test article, used for research hackathon poc',
    //     'pd': '1671375724943',
    //     'a': { 'n': 'Author 7' }
    //   },
    //   {
    //     'hl': 'Research Report 8',
    //     'ab': 'This is a test article, used for research hackathon poc',
    //     'pd': '1671375724943',
    //     'a': { 'n': 'Author 8' }
    //   },
    //   {
    //     'hl': 'Research Report 9',
    //     'ab': 'This is a test article, used for research hackathon poc',
    //     'pd': '1671375724943',
    //     'a': { 'n': 'Author 9' }
    //   },
    //   {
    //     'hl': 'Research Report 10',
    //     'ab': 'This is a test article, used for research hackathon poc',
    //     'pd': '1671375724943',
    //     'a': { 'n': 'Author 10' }
    //   }
    // ]

  }

  openReport(item) {
    if (item && item.id) {
      let url = 'https://ny.matrix.ms.com/eqr/article/webapp/' + item.id;
      window.open(url, '_blank');
    }
  }
}
