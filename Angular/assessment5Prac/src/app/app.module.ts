import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { Practice1Component } from './practice1/practice1.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    Practice1Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
