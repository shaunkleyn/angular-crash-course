import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {
  constructor(private el: ElementRef) { }

  title: string;
  isExpanded: boolean;
  
  ngOnInit() {
    this.title = this.el.nativeElement.title;
  }
}