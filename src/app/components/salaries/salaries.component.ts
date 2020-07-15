import { Component, OnInit } from '@angular/core';
import { SalariesServiceService } from 'src/app/salaries-service.service';



@Component({
  selector: 'app-salaries',
  templateUrl: './salaries.component.html',
  styleUrls: ['./salaries.component.scss']
})
export class SalariesComponent implements OnInit {
  [x: string]: any;
  salaries: any
  
 
  
  
  constructor(public SalariesServiceService: SalariesServiceService) { }


  ngOnInit() {
    this.getSalaries()

  }

  getSalaries() {
    console.log();
    this.SalariesServiceService.getSalaries().subscribe (results => {
      console.log(results);

    })
  }}
