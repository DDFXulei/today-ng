import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SysadminComponent } from './sysadmin.component';
import { ContentComponent } from './content/content.component';
import {SysadminRoutingModule} from './sysadmin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SysadminRoutingModule
  ],
  declarations: [SysadminComponent, ContentComponent]
})
export class SysadminModule { }
