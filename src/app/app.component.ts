import {Component, OnInit} from '@angular/core';
import {Permission} from './check/check.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  doSomething(value: string[]){
    console.log(value);
  }

  permission: Permission = {
    name: 'damtom',
    completed: false,
    child: [
      {name: 'damtom_create', completed: false},
      {name: 'damtom_update', completed: false},
      {name: 'damtom_delete', completed: false}
    ]
  };
}
