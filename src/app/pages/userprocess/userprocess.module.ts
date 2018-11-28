import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserprocessComponent } from './userprocess.component';
import {UserprocessRoutingModule} from './userprocess-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UserprocessRoutingModule
  ],
  declarations: [UserprocessComponent]
})
export class UserprocessModule { }
