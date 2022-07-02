import { Component, OnInit } from '@angular/core';
import { ScreenService } from 'src/spa/services/screen.service';

@Component({
  selector: 'spa-header',
  templateUrl: './spa-header.component.html',
  styleUrls: ['./spa-header.component.scss']
})
export class SpaHeaderComponent implements OnInit {

  constructor(public screenService: ScreenService) { }

  ngOnInit(): void {
  }

}
