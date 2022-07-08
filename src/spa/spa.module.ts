import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SpaBodyComponent } from './components/spa-body/spa-body.component';
import { SpaHeaderComponent } from './components/spa-header/spa-header.component';
import { SpaContentComponent } from './components/spa-content/spa-content.component';
import { SpaFooterComponent } from './components/spa-footer/spa-footer.component';
import { SpaConfigService } from './services/spa-config.service';
import { IconBarComponent } from './components/icon-bar/icon-bar.component';
import { ScreenService } from './services/screen.service';
import { ScreenLargeDirective } from './directives/screen-large.directive';
import { ScreenSmallDirective } from './directives/screen-small.directive';
import { MenuService } from './services/menu.service';
import { MenuComponent } from './components/menus/menu/menu.component';
import { MenuItemComponent } from './components/menus/menu-item/menu-item.component';
@NgModule({
  imports: [ CommonModule ],
  declarations: [
    SpaBodyComponent,
    SpaHeaderComponent,
    SpaContentComponent,
    SpaFooterComponent,
    IconBarComponent,
    ScreenLargeDirective,
    ScreenSmallDirective,
    MenuComponent,
    MenuItemComponent
  ],
  exports: [ SpaBodyComponent ],
  providers: [ SpaConfigService, ScreenService, MenuService ]
})
export class SpaModule { }
