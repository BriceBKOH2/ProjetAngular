import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { BtnDisplayNavbarComponent } from './btn-display-navbar/btn-display-navbar.component';
import { NavScrollDirective } from './directive/nav-scroll.directive';
import { NavUserNamePipe } from './pipe/nav-user-name.pipe';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavbarComponent,
    BtnDisplayNavbarComponent,
    NavScrollDirective,
    NavUserNamePipe,
    SearchBarComponent
  ],
  imports: [CommonModule, FormsModule],
  exports: [NavbarComponent, BtnDisplayNavbarComponent, NavScrollDirective]
})
export class NavigationModule {}
