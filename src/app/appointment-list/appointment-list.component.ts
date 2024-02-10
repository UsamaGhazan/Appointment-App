import { Component ,OnInit} from '@angular/core';
import { Appointment } from '../models/appointment';
import { FormControl, ReactiveFormsModule ,FormGroup,Validators} from '@angular/forms';
import { DatePipe, NgFor } from '@angular/common';
@Component({
  selector: 'app-appointment-list',
  standalone: true,
  imports: [ReactiveFormsModule,NgFor,DatePipe],
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css',
})
export class AppointmentListComponent implements OnInit {
  appointmentForm:FormGroup;
  appointments:Appointment[]=[]

  constructor(){
    this.appointmentForm=new FormGroup({
      newAppointmentTitle:new FormControl(''),
      newAppointmentDate:new FormControl('')
    })
  }
  ngOnInit(): void {
    const appointments=localStorage.getItem('appointments')
    this.appointments=appointments?  JSON.parse(appointments):[]
  }

  onAdd(): void {
    const title = this.appointmentForm?.get('newAppointmentTitle')?.value; // Access using correct control name
    const date=this.appointmentForm.get('newAppointmentDate')?.value;
   if(title.trim().length && date){
    let newAppointment:Appointment={
      id:Date.now(),
      title,
      date
    }
    this.appointments.push(newAppointment);
    localStorage.setItem('appointments',JSON.stringify(this.appointments))
    this.appointmentForm.reset()
   }
   else{
     alert('Please fill all the fields')
 }
  }

  deleteAppointment(index:number):void{
   this.appointments.splice(index,1)
   localStorage.setItem('appointments',JSON.stringify(this.appointments))

  }
  
}
