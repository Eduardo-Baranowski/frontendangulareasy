import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './pages/adduser/adduser.component';
import { EdituserComponent } from './pages/edituser/edituser.component';
import { ListuserComponent } from './pages/listuser/listuser.component';

const routes: Routes = [
  { path: 'listuser', component: ListuserComponent },
  { path: 'adduser', component: AdduserComponent },
  { path: 'listuser/edituser/:uuid', component: EdituserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
