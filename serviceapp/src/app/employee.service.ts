import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {

  constructor() { }

  getEmployee(){
    return[
      {'name':"Ralph", 'age':"24"},
      {'name':"Riley", 'age':"26"},
      {'name':"Randy", 'age':"28"}
    ]
  }

}
