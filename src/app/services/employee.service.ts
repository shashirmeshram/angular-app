import { Injectable } from '@angular/core';
import { Employee } from '../model/employee.data';
import employeesData from '../data/employees.data';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor() {}

  getEmployees(): Employee[] {
    return employeesData;
  }

  getString(): string {
    return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  }
  /**
Total Count of Unique Words: 62
Total Count of Duplicate Words: 7
   */
}
