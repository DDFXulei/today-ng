import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceComponent } from './workspace.component';
import {WorkspaceRoutingModule} from './workspace-routing.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';

import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { TabComponent } from './tab/tab.component';

@NgModule({
  imports: [
    CommonModule,
    WorkspaceRoutingModule,
    NgZorroAntdModule
  ],
  declarations: [
    WorkspaceComponent,
    HeaderComponent,
    SidebarComponent,
    TabComponent
  ]
})
export class WorkspaceModule { }
