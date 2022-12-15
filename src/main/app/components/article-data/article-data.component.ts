import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import data from '../../../assets/json/data.json';

@Component({
  selector: 'article-data-component',
  templateUrl: './article-data.component.html',
  styleUrls: ['./article-data.component.scss'],
})
export class ArticleDataComponent implements OnInit {
  articleIntro: string;
  para1: string;
  para2: string;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.setData();
  }
  setData() {
    // this.http
    //   .get('https://java-httpnew.azurewebsites.net/api/get?w=Portal&wc=300')
    //   .subscribe((response: any) => {
    //     this.articleIntro = response.data;
    //   });

    this.articleIntro = data.articleIntro;

    this.para1 = data.para1;
    this.para2 = data.para2;
  }
}
