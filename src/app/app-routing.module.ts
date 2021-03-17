import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CheckComponent} from './check/check.component';
import {FormComponent} from './form/form.component';

const routes: Routes = [
  {path: 'form', component: FormComponent},
  {path: 'check', component: CheckComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
