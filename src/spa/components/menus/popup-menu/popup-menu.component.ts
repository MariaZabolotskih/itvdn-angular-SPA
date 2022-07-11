import { Component, Input, OnInit } from '@angular/core';
import { MenuItem, MenuService } from 'src/spa/services/menu.service';

@Component({
  selector: 'spa-popup-menu',
  templateUrl: './popup-menu.component.html',
  styleUrls: ['./popup-menu.component.scss']
})
export class PopupMenuComponent implements OnInit {
  @Input() menu: MenuItem[];
  constructor(public menuService: MenuService) { }

  ngOnInit(): void {
  }

}
