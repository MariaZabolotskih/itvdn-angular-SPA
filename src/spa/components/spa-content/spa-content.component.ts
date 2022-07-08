import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/spa/services/menu.service';
import { ScreenService } from 'src/spa/services/screen.service';

@Component({
  selector: 'spa-content',
  templateUrl: './spa-content.component.html',
  styleUrls: ['./spa-content.component.scss']
})
export class SpaContentComponent implements OnInit {

  constructor(public screenService: ScreenService, public menuService: MenuService) { }

  ngOnInit(): void {
  }

}
