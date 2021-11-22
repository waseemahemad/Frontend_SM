import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../../student';
import { StudentService } from '../../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  constructor(private studentService:StudentService,private router:Router) { }

  student: Student = new Student();
  submitted = false;
  ngOnInit() {
  }
  save() {
    this.studentService
    .createStudent(this.student).subscribe(data => {
      console.log(data)
      this.student = new Student();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  doLogout() {
    this.studentService.logOut();
    this.router.navigate(['login'])
  }
  onSubmit() {
    this.submitted = true;
    this.save();    
  }
  viewStudent(){
    
    this.router.navigate(['/Studentlist']);
  }
  gotoList() {
    this.router.navigate(['/studentlist']);
  }

}
