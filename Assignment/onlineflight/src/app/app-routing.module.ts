import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SubmittedComponent} from './submitted/submitted.component'
import { AppComponent } from './app.component';
import { BookingComponent } from './booking/booking.component';


const routes: Routes = [
  // {path:" ",redirectTo:"/BookingComponent",pathMatch:"full"},
  // {path:'sub',component:SubmittedComponent,pathMatch:"full"},
  {
    component:SubmittedComponent,
    path:'aboutus'
  },
  {
    component:BookingComponent,
    path:''
  },
  {
    component:BookingComponent,
    path:'booking'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
