import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  employee = [];

  constructor(private _getdata:EmployeeService) { }

  ngOnInit() {
    this.employee = this._getdata.getEmployee();
  }

}
