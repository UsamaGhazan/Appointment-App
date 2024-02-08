import { Component ,OnInit} from '@angular/core';
import { Appointment } from '../models/appointment';
import { FormControl, ReactiveFormsModule ,FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'app-appointment-list',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css',
})
export class AppointmentListComponent {
  appointmentForm:FormGroup;
  appointments:Appointment[]=[]

  constructor(){
    this.appointmentForm=new FormGroup({
      newAppointmentTitle:new FormControl('',Validators.required),
      newAppointmentDate:new FormControl('')
    })
  }

  onAdd(): void {
    const title = this.appointmentForm?.get('newAppointmentTitle')?.value; // Access using correct control name
    const date=this.appointmentForm.get('newAppointmentDate')?.value;
    console.log('Added');
    console.log(title);
    console.log(date)
  }
  
}
