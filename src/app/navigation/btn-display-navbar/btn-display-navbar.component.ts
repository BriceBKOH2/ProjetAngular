import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-btn-display-navbar",
  templateUrl: "./btn-display-navbar.component.html",
  styleUrls: ["./btn-display-navbar.component.scss"]
})
export class BtnDisplayNavbarComponent implements OnInit {
  @Output() navBarDisplay = new EventEmitter<boolean>();

  private displayNavBar = true;

  constructor() {}

  ngOnInit() {}

  navBarDisplayed() {
    this.displayNavBar = !this.displayNavBar;
    this.navBarDisplay.emit(this.displayNavBar);
  }
}
