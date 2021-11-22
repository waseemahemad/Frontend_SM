import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../../student';
import { StudentService } from '../../student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  id: number;
  student: Student;

  constructor(private route: ActivatedRoute,private router: Router,
    private service: StudentService) { }

  ngOnInit() {
    this.student = new Student();

    this.id = this.route.snapshot.params['id'];
    
    this.service.getStudent(this.id)
      .subscribe(data => {
        console.log(data)
        this.student = data;
      }, error => console.log(error));
  }

  updateEmployee() {
    this.service.updateStudent(this.id, this.student)
      .subscribe(data => {
        console.log(data);
        this.student = new Student();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateEmployee();    
  }

  gotoList() {
    this.router.navigate(['/Studentlist']);
  }

}
