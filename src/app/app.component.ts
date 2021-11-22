import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'School management';

  constructor(private service: StudentService,private router:Router) { }
  doLogout() {
    this.service.logOut();
    this.router.navigate(['login'])
  }
}

