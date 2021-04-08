import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { NgSelectModule, NgOption } from '@ng-select/ng-select';
import { NgForm } from '@angular/forms';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit{

  user = {} as User;
  users: User[] = [];

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {


    this.route.params.subscribe(
      (params: any) => {
        const uuid = params['uuid'];
        //this.getUser(uuid);
        const user$ = this.userService.getUser(uuid);
        user$.subscribe(user => {

        });



      }
    );
  }

  getUser(user: User){
    this.userService.getUser(user).subscribe((user: User) => {
      this.user = user;
    });
  }

  selectedDispIds = [];

  disponibilidades = [
    { id: 1, name: 'Até 4' },
    { id: 2, name: '4 a 6' },
    { id: 3, name: '6 a 8' },
    { id: 4, name: 'Acima de 8' },
    { id: 5, name: 'Finais de Semana' },
  ];

  horarios = [
    { id: 1, name: '8 às 12' },
    { id: 2, name: '13 às 18' },
    { id: 3, name: '19 às 22' },
    { id: 4, name: 'Acima das 22' },
    { id: 5, name: 'Comercial' },
  ];

  notas = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
  ];

  //saveUser(form: NgForm) {
    //this.userService.saveUser(this.user).subscribe(() => {
      //this.cleanForm(form);
    //});
  //}

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

  cleanForm(form: NgForm) {
    form.resetForm();
  }
}
