import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  @Input()
  displayNavBar: boolean;

  isCollapsed = true;
  title = "My NarvBar";
  logo = "https://angular.io/assets/images/logos/angular/angular.svg";

  constructor() {}

  ngOnInit() {}

  changeCollapse(isDisplayed) {
    this.isCollapsed = isDisplayed;
  }
}
