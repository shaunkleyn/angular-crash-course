import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  @Input('isActive') isActive: boolean;
  @Input('likesCount') likesCount: number;
  @Output('likeChange') click = new EventEmitter()

  onLike() {
    this.likesCount += this.isActive ? -1 : 1;
    this.isActive = !this.isActive;
    this.click.emit(this.isActive);
  }
}