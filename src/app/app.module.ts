
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ZippyComponent, ContactDetailsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }