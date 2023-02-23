import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'banner-component',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  bannerContent;
  constructor(private metaService: Meta) {
    this.bannerContent = {
      title: 'Going for Growth',
      heroImage: '/assets/banner2.jpg',
    };
    this.addTag();
  }
  ngOnInit(): void {}

  addTag(): void {
    this.metaService.addTag({
      property: 'og:image',
      content: this.bannerContent.heroImage,
    });
    this.metaService.addTag({
      property: 'og:title',
      content: this.bannerContent.title,
    });
  }
}
