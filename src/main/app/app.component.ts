import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'hackathon-http2';
  closeChildBrowser() {
    window.location.href =
      'eqr/article/webapp/close?corodva_cmd=true&cmd_to_run=window.ChildBrowser.close()';
  }
}
