import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"]
})
export class AuthComponent implements OnInit {
  public isLoggedIn = false;

  public loggedInUser = "Dheeraj";

  constructor() {}

  ngOnInit() {}
}
