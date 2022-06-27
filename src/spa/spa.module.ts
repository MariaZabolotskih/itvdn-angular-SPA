import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SpaBodyComponent } from './spa-body/spa-body.component';
import { SpaHeaderComponent } from './spa-body/spa-header/spa-header.component';
import { SpaContentComponent } from './spa-body/spa-content/spa-content.component';
import { SpaFooterComponent } from './spa-body/spa-footer/spa-footer.component';

@NgModule({
  imports: [ CommonModule ],
  declarations: [
    SpaBodyComponent,
    SpaHeaderComponent,
    SpaContentComponent,
    SpaFooterComponent
  ],
  exports: [ SpaBodyComponent ]
})
export class SpaModule { }
