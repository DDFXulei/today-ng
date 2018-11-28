import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SysadminComponent} from './sysadmin.component';

const routes: Routes = [
  { path: '', component: SysadminComponent},
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class SysadminRoutingModule {

}
