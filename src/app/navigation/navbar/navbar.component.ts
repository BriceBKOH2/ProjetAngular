import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { NavBarDisplayService } from '../service/navbar-display.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navBarDisplay: Observable<boolean>;

  user = { firstName: String, lastName: String };
  isCollapsed = true;
  title = 'My NarvBar';
  logo = 'https://angular.io/assets/images/logos/angular/angular.png';

  constructor(private navBarDisplayService: NavBarDisplayService) {}

  ngOnInit() {
    this.navBarDisplay = this.navBarDisplayService.onChangeDisplay();
  }
}
