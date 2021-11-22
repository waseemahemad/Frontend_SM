import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestapiService } from 'src/app/restapi.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  userlist:any;
  constructor(private service:RestapiService,private router:Router) { }

  ngOnInit() {
    this.getTeacherlist();
  }
  getTeacherlist(){
    let resp=this.service.getUsers();
    console.log("** 11 resp**"+resp); 
    resp.subscribe(data=>{
      this.userlist=data;
      console.log("**Person**"+data); 
    });
}
addTeacher(){
  this.router.navigate(["/teacher"]);
}

// deleteteacher(id: number) {
//   this.service.deleteTeacher(id)
//     .subscribe(
//       data => {
//         console.log(data);
//         this.getTeacherlist();
//       },
//       error => console.log(error));
// }


updateteacher(id: number){
  this.router.navigate(['updateteacher', id]);
}
      doLogout(){
            this.service.logOut();
        }


}
