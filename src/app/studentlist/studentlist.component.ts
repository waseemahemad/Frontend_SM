import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {

  studentLst: any;
  constructor(private service: StudentService,private router:Router) { }

  ngOnInit() {
    this.getStudentlist();
  }
  getStudentlist() {
    let resp = this.service.getStudentsList();
    console.log("** 11 resp**" + resp);
    resp.subscribe(data => {
      this.studentLst = data;
      console.log("**Person**" + data);
    });
  }
  addStudent(){
this.router.navigate(['student']);
  }

  doLogout() {
    this.service.logOut();
  }

  deleteEmployee(id: number) {
    this.service.deleteStudent(id)
      .subscribe(
        data => {
          console.log(data);
          this.getStudentlist();
        },
        error => console.log(error));
  }


  updateStudent(id: number){
    this.router.navigate(['updatestudent', id]);
  }
}
