import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { NgFor, NgForOf } from '@angular/common';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  standalone: true,
  imports: [NgForOf],
})
export class EmployeesComponent implements OnInit {
  employeesData: any;
  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employeesData = this.employeeService.getEmployees();
    
  }
}
