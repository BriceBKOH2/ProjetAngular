import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { NavBarDisplayService } from '../service/navbar-display.service';

@Component({
  selector: 'app-btn-display-navbar',
  templateUrl: './btn-display-navbar.component.html',
  styleUrls: ['./btn-display-navbar.component.scss']
})
export class BtnDisplayNavbarComponent implements OnInit {
  constructor(private navBarDisplayService: NavBarDisplayService) {}

  ngOnInit() {}

  toggleDisplay() {
    this.navBarDisplayService.toggleDisplay();
  }
}
