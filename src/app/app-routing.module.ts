import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CheckComponent} from './check/check.component';
import {FormComponent} from './form/form.component';
import {Form2Component} from './form2/form2.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
