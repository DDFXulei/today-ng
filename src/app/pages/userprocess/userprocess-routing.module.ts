import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserprocessComponent} from './userprocess.component';

const routes: Routes = [
  { path: '', component: UserprocessComponent},
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class UserprocessRoutingModule {

}
