import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/spa/services/menu.service';
import { ScreenService } from 'src/spa/services/screen.service';

@Component({
  selector: 'spa-header',
  templateUrl: './spa-header.component.html',
  styleUrls: ['./spa-header.component.scss']
})
export class SpaHeaderComponent implements OnInit {
  flagForIcons = true;
  constructor(public screenService: ScreenService, public menuService: MenuService) { }

  ngOnInit(): void {
  }

}
