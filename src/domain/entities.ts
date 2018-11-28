export interface NavigateMenu {
  id: string;
  menuName: string;
  navIcon: string;
  navIconTheme: string;
  navList: ChildMenu[];
}

export interface ChildMenu {
  menuName: string;
  navIcon: string;
  navIconTheme: string;
  navUrl: string;
}
