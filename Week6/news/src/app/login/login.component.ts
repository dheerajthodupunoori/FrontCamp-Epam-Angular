import { Component, OnInit } from "@angular/core";
import { User } from "../user";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  user = new User("", "");
  public errorMessage: string;

  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private _authService: AuthService
  ) {}

  ngOnInit() {}

  validateUser() {
    this.errorMessage = "";
    if (this._authService.validateUser(this.user)) {
      this.route.navigate([""]);
    } else {
      this.errorMessage =
        "Username and Password are not correct. please give correct input";
    }
  }
}
