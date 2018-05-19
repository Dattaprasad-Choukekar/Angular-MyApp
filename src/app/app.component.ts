import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Wedding Invitation';
  bride = 'Madhuri';
  brideUrl = 'maddy.jpg';
  groom = 'Dattaprasad';
  groomUrl = 'datta.jpg';
}
