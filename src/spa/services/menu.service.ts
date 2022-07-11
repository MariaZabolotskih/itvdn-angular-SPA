import { Injectable } from '@angular/core';

export interface MenuItem {
  text: string;
  icon: string;
  route: string;
  submenu: MenuItem[];
}
@Injectable()
export class MenuService {
  items: MenuItem[];
  isVertical = false;
  showVerticalMenu = false;
  
  constructor() { }

  toggleMenu(): void {
    this.isVertical = true;
    this.showVerticalMenu = !this.showVerticalMenu;
  }

  toggleOrientation(): void {
    this.isVertical = !this.isVertical;
  }
}
