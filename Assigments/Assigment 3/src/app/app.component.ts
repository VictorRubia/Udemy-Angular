import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ang-Assignment3';
  showSecret = false;
  log = [];

  onToggleDisplay(){
    this.showSecret = !this.showSecret;
    // @ts-ignore
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }

}
