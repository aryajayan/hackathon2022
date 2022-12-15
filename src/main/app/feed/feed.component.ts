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

    fetch('https://java-httpnew.azurewebsites.net/api/status', {mode: 'no-cors'}).then((response) => {
      console.log(response);
    })


    fetch('https://java-httpold.azurewebsites.net/api/status', {mode: 'no-cors'}).then((response) => {
      console.log(response);
    })
  }



}
