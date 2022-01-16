import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './services/user.service';

import { faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'random-info-card';
  user: any;
  faUsers = faUsers;

  constructor(private userService: UserService, private toastr: ToastrService) {
    console.log('constructor'); 
  }

  getNewUser = () => {
    this.userService.getUsers().subscribe(
      (user: any) => {
        this.user = user.results[0];
        console.log(this.user);
      },
      (err) => this.toastr.error(err.message, 'Error')
    );
  }

  ngOnInit(): void {
      console.log('ngOnInit');
      this.userService.getUsers().subscribe(
        (user: any) => {
          this.user = user.results[0];
          console.log(this.user);
        },
        (err) => this.toastr.error(err.message, 'Error')
      );
  }
}
