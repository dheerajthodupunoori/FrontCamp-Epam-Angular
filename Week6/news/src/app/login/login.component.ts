import { Component, OnInit } from "@angular/core";
import { User } from "../user";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  user = new User("", "");
  public errorMessage: string;

  constructor(private route: Router, private router: ActivatedRoute) {}

  ngOnInit() {}

  validateUser() {
    console.log(this.user.UserName, this.user.Password);
    this.errorMessage = "";
    if (this.user.UserName === "dheeraj" && this.user.Password === "dheeraj") {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userName", this.user.UserName);
      this.route.navigate([""]);
    } else {
      localStorage.setItem("isLoggedIn", "false");
      this.errorMessage =
        "Username and Password are not valid. Please give valid credentials";
    }
  }
}
