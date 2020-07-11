import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tweet = {
    body: 'Here is the body of a tweet...',
    isActive: false,
    likesCount: 0
  };

  title = 'favorite';

  likeChange(eventArgs: boolean) {
    console.log('favorite changed: ' + eventArgs);
  }
}