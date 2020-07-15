import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes} from '@angular/router';
import { SalariesComponent } from '../app/components/salaries/salaries.component';



const routes: Routes = [
  { path: 'salaries', component: SalariesComponent },
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }