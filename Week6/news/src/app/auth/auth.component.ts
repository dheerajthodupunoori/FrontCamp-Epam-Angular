import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "../auth.service";
import { User } from "../user";
import { Role } from "../models/role";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"]
})
export class AuthComponent implements OnInit {
  public isLoggedIn: Boolean;

  public loggedInUser: User;

  public displayLogInForm: Boolean = false;
  user = new User("", "");
  public errorMessage: string;

  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private _authService: AuthService
  ) {}

  ngOnInit() {
    this.isLoggedIn = Boolean(localStorage.getItem("isLoggedIn"));
  }

  showLogInForm() {
    this.displayLogInForm = !this.displayLogInForm;
  }
  validateUser() {
    this.errorMessage = "";
    if (this._authService.validateUser(this.user)) {
      this.displayLogInForm = !this.displayLogInForm;
      this.isLoggedIn = Boolean(localStorage.getItem("isLoggedIn"));
      this._authService.currentLoggedInUser.subscribe(
        data => (this.loggedInUser = data)
      );
      if (this.loggedInUser.role === Role.Admin) {
        this.route.navigate(["/admin"]);
      } else {
        this.route.navigate(["/newsFeed"]);
      }
    } else {
      this.errorMessage =
        "Username and Password are not correct. please give correct input";
    }
  }
  logOut() {
    this._authService.logOut();
    this.isLoggedIn = !this.isLoggedIn;
    this.route.navigate([""]);
  }
}
