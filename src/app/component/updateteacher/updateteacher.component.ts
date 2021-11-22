import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Teacher } from '../../teacher';
import { TeacherService } from '../../teacher.service';

@Component({
  selector: 'app-updateteacher',
  templateUrl: './updateteacher.component.html',
  styleUrls: ['./updateteacher.component.css']
})
export class UpdateteacherComponent implements OnInit {

  id: number;
  teacher: Teacher;

  constructor(private route: ActivatedRoute,private router: Router,
    private service: TeacherService) { }

  ngOnInit() {
    this.teacher = new Teacher();

    this.id = this.route.snapshot.params['id'];
    
    this.service.getTeacher(this.id)
      .subscribe(data => {
        console.log(data)
        this.teacher = data;
      }, error => console.log(error));
  }

  updateEmployee() {
    this.service.updateTeacher(this.id, this.teacher)
      .subscribe(data => {
        console.log(data);
        this.teacher = new Teacher();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateEmployee();    
  }

  gotoList() {
    this.router.navigate(['teacherlist']);
  }
}
