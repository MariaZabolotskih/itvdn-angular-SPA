import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { PopupMenuComponent } from './components/menus/popup-menu/popup-menu.component';
import { SignInComponent } from './components/users/sign-in/sign-in.component';
import { RegistrationComponent } from './components/users/registration/registration.component';
@NgModule({
  imports: [ CommonModule, RouterModule, FormsModule ],
  declarations: [
    SpaBodyComponent,
    SpaHeaderComponent,
    SpaContentComponent,
    SpaFooterComponent,
    IconBarComponent,
    ScreenLargeDirective,
    ScreenSmallDirective,
    MenuComponent,
    MenuItemComponent,
    PopupMenuComponent,
    SignInComponent,
    RegistrationComponent
  ],
  exports: [ SpaBodyComponent ],
  providers: [ SpaConfigService, ScreenService, MenuService ]
})
export class SpaModule { }
