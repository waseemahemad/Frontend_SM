import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Teacher } from '../../teacher';
import { TeacherService } from '../../teacher.service';

@Component({
  selector: 'app-teachermanagement',
  templateUrl: './teachermanagement.component.html',
  styleUrls: ['./teachermanagement.component.css']
})
export class TeachermanagementComponent implements OnInit {
  constructor(private service123: TeacherService,private router:Router) { }

  teacher: Teacher = new Teacher();
  submitted = false;
  message123:any;
  ngOnInit() {
  }
/* invoke from Submit button click */
  public registerNow(){
    let resp=this.service123
        .createTeacher(this.teacher);
    resp.subscribe((data123=>this.message123=data123));
    this.router.navigate(["/teacherlist"]);

    }
    viewTeacher(){
      this.router.navigate(["/teacherlist"]);
    }
    save() {
      console.log("teacher", this.teacher);
      this
    }
    onSubmit() {
      this.submitted = true;
      this.registerNow();
    }
  
}
