import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./navbar/navbar.component";
import { BtnDisplayNavbarComponent } from "./btn-display-navbar/btn-display-navbar.component";

@NgModule({
  declarations: [NavbarComponent, BtnDisplayNavbarComponent],
  imports: [CommonModule],
  exports: [NavbarComponent, BtnDisplayNavbarComponent]
})
export class NavigationModule {}
