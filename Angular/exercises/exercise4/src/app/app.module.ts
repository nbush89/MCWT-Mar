import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UpDownCounterComponent } from './up-down-counter/up-down-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    UpDownCounterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
