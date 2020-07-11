import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {
  title: string;
  isExpanded: boolean;
  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.title = this.el.nativeElement.title;
  }

}