import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"]
})
export class AuthComponent implements OnInit {
  public isLoggedIn: Boolean;

  public loggedInUser: string;

  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private _authService: AuthService
  ) {}

  ngOnInit() {
    this.isLoggedIn = Boolean(localStorage.getItem("isLoggedIn"));
  }

  isAlreadyLoggedIn() {
    if (localStorage.getItem("isLoggedIn") === null) {
      this.route.navigate(["/login"]);
    } else {
      this.isLoggedIn = Boolean(localStorage.getItem("isLoggedIn"));
      this.loggedInUser = localStorage.getItem("userName");
    }
  }
}
