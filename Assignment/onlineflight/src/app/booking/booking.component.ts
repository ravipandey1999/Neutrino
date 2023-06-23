import { Component } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {

  myClickFunction(event: any) {
    alert("Details saved");
    console.log(event);
 }
 mycancelFunction(){
  confirm("you want to remove the details....!!!");
 }
}

