import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserInfoComponent } from './components/dentist/user-info/user-info.component';

const routes: Routes = [
  {path:'', redirectTo: 'dentist', pathMatch: 'full'},
  {path : 'dentist' , component: UserInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
