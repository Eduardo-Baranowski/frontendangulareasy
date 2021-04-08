import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {

  user = {} as User;
  users: User[] = [];


  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUsers();
  }


  saveUser(form: NgForm) {
    if (this.user.uuid !== undefined) {
      this.userService.updateUser(this.user).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.userService.saveUser(this.user).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }


  getUsers(){
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }

  updateUser(user: User) {
    this.router.navigate(['edituser', user.uuid], { relativeTo: this.route});
    this.user = { ...user };
  }


  deleteUser(user: User) {
    this.userService.deleteUser(user).subscribe(() => {
      this.getUsers();
    });
  }


  cleanForm(form: NgForm) {
    form.resetForm();
  }

}
