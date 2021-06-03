import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PeopleComponent} from './people/people.component';
import { HomeComponent } from './home/home.component'
const routes: Routes = [
  {path: 'people', component: PeopleComponent}, 
  {path: 'people/:id', component: PeopleComponent}, 
  {path: '', component: HomeComponent, pathMatch:'full'}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
