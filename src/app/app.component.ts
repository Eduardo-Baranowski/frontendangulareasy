
import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './models/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  user = {} as User;

  constructor(private userService: UserService) {}

  saveUser(form: NgForm) {
      this.userService.saveUser(this.user).subscribe(() => {
        this.cleanForm(form);
      });
    }

    cleanForm(form: NgForm) {
      form.resetForm();
    }
}

