import { Component, OnInit } from '@angular/core';
import {ChildMenu, NavigateMenu} from '../../../domain/entities';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isCollapsed = false;
  isReverseArrow = false;
  sideMenuList: NavigateMenu[]

  constructor(
    private  router: Router
  ) {
    this.sideMenuList = [
      {id: '1', menuName: '流程管理', navIcon: 'form', navIconTheme: 'outline', navList: [
        {menuName: '系统管理', navIcon: 'edit', navIconTheme: 'outline', navUrl: 'work/sysadmin'},
        {menuName: '系统设置', navIcon: 'read', navIconTheme: 'outline', navUrl: 'work/setup'},
        {menuName: '用户流程', navIcon: 'search', navIconTheme: 'outline', navUrl: 'work/userprocess'}
      ]}
    ];
  }

  ngOnInit() {
  }

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  navHandler(child: ChildMenu): void {
    this.router.navigateByUrl(child.navUrl);
    
  }
}
