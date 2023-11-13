// schedule.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  appointmentForm!: FormGroup;
  successMessage = '';

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.appointmentForm = this.fb.group({
      name: ['', Validators.required],
      numberOfPeople: ['', [Validators.required, Validators.min(1)]],
      startTime: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.appointmentForm.valid) {
      console.log(this.appointmentForm.value);
      this.successMessage = 'You submitted your request!';
    } else {
      this.markFormControlsAsTouched();
    }
  }

  markFormControlsAsTouched() {
    Object.values(this.appointmentForm.controls).forEach(control => {
      control.markAsTouched();
    });
  }
}
