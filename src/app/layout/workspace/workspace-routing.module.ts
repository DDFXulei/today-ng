import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WorkspaceComponent} from './workspace.component';

const routes: Routes = [
  { path: '',
    component: WorkspaceComponent,
    children: [
      {
        path: 'sysadmin',
        loadChildren: '../../pages/sysadmin/sysadmin.module#SysadminModule'
      },
      {
        path: 'setup',
        loadChildren: '../../pages/setup/setup.module#SetupModule'
      },
      {
        path: 'userprocess',
        loadChildren: '../../pages/userprocess/userprocess.module#UserprocessModule'
      },
    ]
  },

];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class WorkspaceRoutingModule {}
