import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  title = "Mon App";
  logo = "https://angular.io/assets/images/logos/angular/angular.svg";

  constructor() {}

  ngOnInit() {}
}
