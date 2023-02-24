import { HttpClient } from '@angular/common/http';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Meta } from '@angular/platform-browser';
import data from '../../../assets/json/data.json';

@Component({
  selector: 'article-data-component',
  templateUrl: './article-data.component.html',
  styleUrls: ['./article-data.component.scss'],
})
export class ArticleDataComponent implements OnInit, OnChanges {
  @Input() selectedSection;
  articleIntro: string;
  para1: string;
  para2: string;
  imageList: Array<any>;

  constructor(private http: HttpClient, private metaService: Meta) {
    this.addTags();
  }

  ngOnInit() {
    this.setData();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['selectedSection'] &&
      changes['selectedSection']['currentValue']
    ) {
      let selectedId = document.querySelector(
        '#section' + changes['selectedSection']['currentValue']
      ) as HTMLElement;
      selectedId.scrollIntoView();
    }
  }
  addTags() {
    // this.metaService.addTag({
    //   property: 'og:description',
    //   content: data.para1,
    // });
  }
  setData() {
    let s1 = data.articleIntro.charAt(0);
    let intro = data.articleIntro.replace(s1, '<strong>$&</strong>');
    this.articleIntro = intro;

    this.para1 = data.para1;
    this.para2 = data.para2;
    this.imageList = data.imageList;
  }
}
