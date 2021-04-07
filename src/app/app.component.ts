
import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './models/user';
import { NgSelectModule, NgOption } from '@ng-select/ng-select';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user = {} as User;

  constructor(private userService: UserService) { }

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

  saveUser(form: NgForm) {
    this.userService.saveUser(this.user).subscribe(() => {
      this.cleanForm(form);
    });
  }

  cleanForm(form: NgForm) {
    form.resetForm();
  }
}

