import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherService } from '../../teacher.service';

@Component({
  selector: 'app-teacherlist',
  templateUrl: './teacherlist.component.html',
  styleUrls: ['./teacherlist.component.css']
})
export class TeacherlistComponent implements OnInit {

  TeacherList:any;
  constructor(private service:TeacherService,private router:Router) { }

  ngOnInit() {
    this.getTeacherlist();
  }
  getTeacherlist(){
    let resp=this.service.getTeacherList();
    console.log("** 11 resp**"+resp); 
    resp.subscribe(data=>{
      this.TeacherList=data;
      console.log("**Person**"+data); 
    });
}
addTeacher(){
  this.router.navigate(["/teacher"]);
}

deleteteacher(id: number) {
  this.service.deleteTeacher(id)
    .subscribe(
      data => {
        console.log(data);
        this.getTeacherlist();
      },
      error => console.log(error));
}


updateteacher(id: number){
  this.router.navigate(['updateteacher', id]);
}
      doLogout(){
            this.service.logOut();
        }


}
