import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public usersForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.usersForm = this.fb.group({
      date: this.fb.control(new Date()),
      permissions: this.fb.array([
        this.fb.control(''),
        this.fb.control(''),
        this.fb.control(''),
        this.fb.control(''),
      ])
    });
  }

  get permissions(): FormArray {
    return this.usersForm.get('permissions') as FormArray;
  }

  onSubmit() {
    console.log(this.usersForm.value);
  }

}
