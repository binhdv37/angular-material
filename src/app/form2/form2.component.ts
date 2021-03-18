import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      isArray: this.fb.array([], [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  MoviesData: Array<any> = [
    { name: 'avenger', value: 'Avenger' },
    { name: 'inception', value: 'Inception' },
    { name: 'parasite', value: 'Parasite' },
    { name: 'joker', value: 'Joker' },
    { name: 'shoplifters', value: 'Shoplifters' }
  ];

  onCbChange(e) {
    const isArray: FormArray = this.form.get('isArray') as FormArray;

    if (e.target.checked) {
      isArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      isArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          isArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  onSubmit(){
    console.log(this.form.value);
  }

}
