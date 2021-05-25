import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { PersonComponent } from './person/person.component';
import { PeopleCounterComponent } from './people-counter/people-counter.component';
import { TestPipe } from './test.pipe'

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PeopleCounterComponent,
    TestPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
