import { Component } from '@angular/core';
import { FavoriteChangeArgs } from './favorite/favorite.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tweet = {
    body: 'Title',
    isLiked: false,
    likesCount: 0
  };

  title = 'favorite';

  onFavoriteChange(eventArgs: FavoriteChangeArgs) {
    console.log('favorite changed: ' + eventArgs);
  }
}